import { useStoreActions, useStoreState } from "easy-peasy";
import Navigator from "./Navigator";
import Box from "./Box";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Home = () => {
  const boxes = useStoreState((state) => state.boxes);
  const clock = useStoreState((state) => state.clock);
  const setClock = useStoreActions((action) => action.setClock);
  const elements = [...Array(parseInt(boxes)).keys()];
  const initBoxes = [];
  elements.forEach((element) => {
    initBoxes.push({ id: element, barcode: null, ready: false });
  });

  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("Scan a test");
  const [barcode, setBarcode] = useState("");
  const [lastTime, setLastTime] = useState(Date.now());

  const [testBoxes, setTestBoxes] = useState(initBoxes);

  const setReady = (id, ready) => {
    let tempBoxes = [...testBoxes];
    tempBoxes[id].ready = ready;
    console.log("set ready: ", id, ready);
  };

  const setFree = (id) => {
    let tempBoxes = [...testBoxes];
    tempBoxes[id].barcode = null;
    setTestBoxes(tempBoxes);
    console.log("set free", id);
  };

  useEffect(() => {
    const now = Date.now();
    setCode(`${now - lastTime > 500 ? "" : code}${number}`);
    setLastTime(now);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  useEffect(() => {
    const now = Date.now();
    if (now - lastTime > 500 && code !== "") {
      setBarcode(code);
      let tempBoxes = [...testBoxes];
      let currentTests = tempBoxes.map((x) => x.barcode);
      let availableBox = currentTests.indexOf(null);
      let isNew = !currentTests.includes(code);

      if (isNew) {
        if (availableBox >= 0) {
          testBoxes[availableBox].barcode = code;
          setMessage("Starting timer for test: " + code);
        } else {
          setMessage("No box available for: " + code);
        }
      } else {
        let box = testBoxes.find((x) => x.barcode === code);
        if (box.ready) {
          setMessage(`Test ${code} is ready`);
        } else {
          setMessage(`Test ${code} is not ready`);
        }
      }

      setTestBoxes(tempBoxes);
      setCode("");
    }
  }, [clock]);

  useEffect(() => {
    const scannerHandler = (e) => {
      setNumber(e.key);
    };

    const interval = setInterval(() => {
      setClock(Date());
    }, 1000);

    document.addEventListener("keydown", scannerHandler);

    return () => {
      document.removeEventListener("keydown", scannerHandler);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p className="has-text-centered title barcode">{message}</p>

      <div className="box-container">
        {testBoxes.map((x) => (
          <Box key={x.id} test={x} setReady={setReady} setFree={setFree} />
        ))}
        <Navigator to="/config" />
      </div>
    </>
  );
};

export default Home;
