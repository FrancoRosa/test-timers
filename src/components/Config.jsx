import { useStoreState, useStoreActions } from "easy-peasy";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setSavedStorage } from "../js/helpers";
import { useNavigate } from "react-router";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { getCommit, getDeviceId } from "../js/api";
import Navigator from "./Navigator";
import Modal from "./Modal";

const Config = () => {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [power, setPower] = useState(false);
  const [rpiId, setRpiId] = useState("");
  const [commitDate, setCommitDate] = useState("");

  const pxWidth = useStoreState((state) => state.pxWidth);
  const cmWidth = useStoreState((state) => state.cmWidth);
  const boxes = useStoreState((state) => state.boxes);
  const size = useStoreState((state) => state.size);
  const time = useStoreState((state) => state.time);

  const setPxWidth = useStoreActions((actions) => actions.setPxWidth);
  const setCmWidth = useStoreActions((actions) => actions.setCmWidth);
  const setBoxes = useStoreActions((actions) => actions.setBoxes);
  const setSize = useStoreActions((actions) => actions.setSize);
  const setTime = useStoreActions((actions) => actions.setTime);

  const [pxRef, setPxRef] = useState(pxWidth);
  const [cmRef, setCmRef] = useState(cmWidth);
  const [boxesRef, setBoxesRef] = useState(boxes);
  const [sizeRef, setSizeRef] = useState(size);
  const [timeRef, setTimeRef] = useState(time);

  const handleSave = () => {
    setPxWidth(pxRef);
    setCmWidth(cmRef);
    setBoxes(boxesRef);
    setSize(sizeRef);
    setTime(timeRef);

    setSavedStorage("pxWidth", pxRef);
    setSavedStorage("cmWidth", cmRef);
    setSavedStorage("boxes", boxesRef);
    setSavedStorage("size", sizeRef);
    setSavedStorage("time", timeRef);
    setMessage(" ... going home");
    setLoading(true);
    setTimeout(() => navigate("/home"), 1000);
  };

  const handlePower = () => {
    console.log("... powering off");
  };

  useEffect(() => {
    getDeviceId().then((res) => setRpiId(res.id));
    getCommit().then((res) => setCommitDate(res.commit.date));
  });

  return (
    <>
      <Navigator to="/home" />
      <div className="is-flex is-flex-centered config">
        <div>
          <h1 className="subtitle has-text-centered">Configuration</h1>
          <div className="field">
            <label className="label">Number of boxes</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="10"
                value={boxesRef}
                onChange={(e) => setBoxesRef(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Width of screen in pixels.</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="1366"
                value={pxRef}
                onChange={(e) => setPxRef(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Width of screen in centimeters.</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="41"
                value={cmRef}
                onChange={(e) => setCmRef(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Size of box in cm.</label>
            <div className="control is-flex">
              <input
                className="input"
                type="number"
                placeholder="7"
                value={sizeRef[0]}
                onChange={(e) => setSizeRef([e.target.value, sizeRef[1]])}
                title="Width"
              />
              <input
                className="input ml-4"
                type="number"
                placeholder="2"
                value={sizeRef[1]}
                onChange={(e) => setSizeRef([sizeRef[0], e.target.value])}
                title="Height"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Process time in min.</label>
            <div className="control is-flex">
              <input
                className="input"
                type="number"
                placeholder="15"
                value={timeRef.ready}
                title="Ready to read time"
                onChange={(e) =>
                  setTimeRef({ ...timeRef, ready: e.target.value })
                }
              />
              <input
                className="input ml-4"
                type="number"
                placeholder="19"
                value={timeRef.alarm}
                title="Alarm time"
                onChange={(e) =>
                  setTimeRef({ ...timeRef, alarm: e.target.value })
                }
              />
              <input
                className="input ml-4"
                type="number"
                placeholder="20"
                value={timeRef.limit}
                title="Maximum time to get reading"
                onChange={(e) =>
                  setTimeRef({ ...timeRef, limit: e.target.value })
                }
              />
            </div>
          </div>

          <button
            onClick={handleSave}
            className={`button is-success is-outlined mt-4 ${
              loading && "is-loading"
            }`}
          >
            Save
          </button>
          <p className="help">{message}</p>
          <div className="is-flex is-flex-centered m-4 ">
            <FontAwesomeIcon
              icon={faPowerOff}
              className="has-text-danger pointer"
              size="lg"
              onClick={() => setPower(true)}
            />
            <Modal
              active={power}
              setActive={setPower}
              setAction={handlePower}
              title="Do you want to shutdown?"
              confirm="Shutdown"
            />
          </div>
          <div className="is-flex mt-4 is-flex-between">
            <p className="has-text-grey mt-4">ID: {rpiId}</p>
            <p className="has-text-grey mt-4">Version: {commitDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Config;
