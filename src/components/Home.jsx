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
    initBoxes.push({ id: element, barcode: null });
  });

  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [barcode, setBarcode] = useState("");
  const [lastTime, setLastTime] = useState(Date.now());

  const [testBoxes, setTestBoxes] = useState(initBoxes);

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
      let availableBox = tempBoxes.map((x) => x.barcode).indexOf(null);
      if (availableBox >= 0) {
        testBoxes[availableBox].barcode = code;
      } else {
        console.log(".. no empty boxes available");
      }
      setTestBoxes(tempBoxes);
      setCode("");
      // APPEND BARCODE AND START COUNTING
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
      <p className="has-text-centered title barcode">{code}</p>

      <div className="box-container">
        {testBoxes.map((x) => (
          <Box key={x.id} barcode={x.barcode} />
        ))}
        <Navigator to="/config" />
      </div>
    </>
  );
};

export default Home;
