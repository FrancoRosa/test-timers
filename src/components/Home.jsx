import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { getDeviceId, sendResult } from "../js/api";
import Navigator from "./Navigator";
import Box from "./Box";
import ResultOptions from "./ResultOptions";
import Wifi from "./Wifi";

const Home = () => {
  const boxes = useStoreState((state) => state.boxes);
  const clock = useStoreState((state) => state.clock);
  const setClock = useStoreActions((action) => action.setClock);
  const setNetwork = useStoreActions((action) => action.setNetwork);
  const elements = [...Array(parseInt(boxes)).keys()];
  const initBoxes = [];
  elements.forEach((element) => {
    initBoxes.push({
      id: element,
      barcode: null,
      ready: false,
    });
  });

  const [numberCode, setNumberCode] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("Scan a test");
  const [barcode, setBarcode] = useState("");
  const [display, setDisplay] = useState(false);
  const [lastTime, setLastTime] = useState(Date.now());

  const [testBoxes, setTestBoxes] = useState(initBoxes);
  const [id, setId] = useState("");

  const setReady = (id, ready) => {
    let tempBoxes = [...testBoxes];
    tempBoxes[id].ready = ready;
  };

  const setFree = (id) => {
    let tempBoxes = [...testBoxes];
    tempBoxes[id].barcode = null;
    setTestBoxes(tempBoxes);
  };

  const handleResponse = () => {
    setDisplay(false);
    setMessage("");
    console.log(barcode);
    let target = testBoxes.find((x) => x.barcode === barcode);
    setFree(target.id);
    setReady(target.id, false);
  };

  const handleInvalid = () => {
    handleResponse();
    sendResult(barcode, "invalid", id);
  };
  const handlePositive = () => {
    handleResponse();
    sendResult(barcode, "positive", id);
  };
  const handleNegative = () => {
    handleResponse();
    sendResult(barcode, "negative", id);
  };

  useEffect(() => {
    const now = Date.now();
    setCode(`${now - lastTime > 500 ? "" : code}${numberCode}`);
    setLastTime(now);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberCode]);

  useEffect(() => {
    const now = Date.now();
    if (now - lastTime > 500 && code !== "") {
      setBarcode(code);
      let tempBoxes = [...testBoxes];
      let currentTests = tempBoxes.map((x) => x.barcode);
      let availableBox = currentTests.indexOf(null);
      let isNew = !currentTests.includes(code);

      if (isNew) {
        setDisplay(false);
        if (availableBox >= 0) {
          testBoxes[availableBox].barcode = code;
          setMessage("Starting timer for test: " + code);
        } else {
          setMessage("No box available for: " + code);
        }
      } else {
        let box = testBoxes.find((x) => x.barcode === code);
        if (box.ready) {
          setMessage(`Test ${code} is ready, select an option:`);
          setDisplay(true);
        } else {
          setMessage(`Test ${code} is not ready`);
        }
      }

      setTestBoxes(tempBoxes);
      setCode("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clock]);

  useEffect(() => {
    getDeviceId().then((res) => setId(res));

    const scannerHandler = (e) => {
      if (e.key.length === 1) setNumberCode(e.key);
      if (e.key === "F5") e.preventDefault();
    };

    const interval = setInterval(() => {
      setClock(Date());
    }, 500);

    document.addEventListener("keydown", scannerHandler);
    window.addEventListener("offline", () => setNetwork(false));
    window.addEventListener("online", () => setNetwork(true));
    setNetwork(window.navigator.onLine);

    return () => {
      document.removeEventListener("keydown", scannerHandler);
      window.removeEventListener("offline", () => setNetwork(false));
      window.removeEventListener("online", () => setNetwork(true));
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-container">
      <header>
        <p className="has-text-centered title mt-4">{message}</p>
        {display && (
          <ResultOptions
            handleNegative={handleNegative}
            handlePositive={handlePositive}
            handleInvalid={handleInvalid}
          />
        )}
      </header>
      <div className="box-container">
        {testBoxes.map((x) => (
          <Box key={x.id} test={x} setReady={setReady} setFree={setFree} />
        ))}
        <Navigator to="/config" />
        <Wifi />
      </div>
    </div>
  );
};

export default Home;
