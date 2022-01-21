import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { getDeviceId, sendResult } from "../js/api";
import {
  appendToStorage,
  getSavedStorage,
  removeFromStorage,
} from "../js/helpers";
import Navigator from "./Navigator";
import ResultOptions from "./ResultOptions";
import Box from "./Box";
import Wifi from "./Wifi";

const Home = () => {
  const boxes = useStoreState((state) => state.boxes);
  const message = useStoreState((state) => state.message);
  const clock = useStoreState((state) => state.clock);
  const network = useStoreState((state) => state.network);
  const setClock = useStoreActions((action) => action.setClock);
  const setMessage = useStoreActions((action) => action.setMessage);
  const setNetwork = useStoreActions((action) => action.setNetwork);
  const elements = [...Array(parseInt(boxes)).keys()];
  const initBoxes = [];
  elements.forEach((element) => {
    initBoxes.push({
      id: element,
      barcode: null,
      ready: false,
      start: null,
    });
  });

  const [numberCode, setNumberCode] = useState("");
  const [code, setCode] = useState("");
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
    let end = Date.now();
    return { start: target.start, end };
  };

  const handleSuccess = (payload) => {
    console.log("... data send:", payload);
    removeFromStorage("recorded", payload, "barcode");
  };

  const handleError = (payload) => {
    console.error("... data not send", payload);
    console.error("... save to local storage", payload);
    appendToStorage("recorded", payload);
  };

  const handleInvalid = () => {
    const { start, end } = handleResponse();
    const payload = { barcode, result: 3, id, start, end };
    sendResult(payload)
      .then(() => handleSuccess(payload))
      .catch(() => handleError(payload));
  };
  const handlePositive = () => {
    const { start, end } = handleResponse();
    const payload = { barcode, result: 2, id, start, end };
    sendResult(payload)
      .then(() => handleSuccess(payload))
      .catch(() => handleError(payload));
  };
  const handleNegative = () => {
    const { start, end } = handleResponse();
    const payload = { barcode, result: 1, id, start, end };
    sendResult(payload)
      .then(() => handleSuccess(payload))
      .catch(() => handleError(payload));
  };

  const handleMismatch = () => {
    setDisplay(false);
    setMessage("");
  }

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
          testBoxes[availableBox].start = Date.now();
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
    if (network) {
      // Send data recorded in local storage
      let recordedValues = getSavedStorage("recorded", {
        recorded: [],
      });
      console.log("Send data from storage");
      recordedValues.forEach((record) => {
        console.log("...sending data:", record);
        sendResult(record).then(() =>
          removeFromStorage("recorded", record, "barcode")
        );
      });
    }
  }, [network]);

  useEffect(() => {
    getDeviceId().then((res) => setId(res.id));

    const scannerHandler = (e) => {
      const key = e.key
      const codechars = /\w/
      if (key.length === 1 && codechars.test(key)) setNumberCode(key);
      if (key === "F5") e.preventDefault();
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
            handleMismatch={handleMismatch}
          />
        )}
      </header>
      <div className="box-container">
        {testBoxes.map((x) => (
          <Box key={x.id} test={x} setReady={setReady} setFree={setFree} />
        ))}
        <Navigator
          to="/config"
          onClick={() => console.log("Clicked Navigator")}
        />
        <Wifi />
      </div>
    </div>
  );
};

export default Home;
