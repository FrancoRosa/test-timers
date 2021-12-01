import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { beepSound } from "../js/helpers";

const Box = () => {
  const finalCount = 5;
  const maxCount = 10;
  const alarmCount = 8;
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(true);
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState("free"); // free - counting - finished - overtime

  const size = useStoreState((state) => state.size);
  const pxWidth = useStoreState((state) => state.pxWidth);
  const cmWidth = useStoreState((state) => state.cmWidth);
  const clock = useStoreState((state) => state.clock);

  const conv = pxWidth / cmWidth;
  const sizePx = [parseInt(size[0] * conv), parseInt(size[1] * conv)];

  const boxStyle = {
    height: sizePx[1],
    width: sizePx[0],
    minHeight: sizePx[1],
    minWidth: sizePx[0],
  };

  const handlePlay = () => {
    setStatus("counting");
  };

  const handleStop = () => {
    setStatus("free");
    setCounter(0);
    setProgress(true);
  };

  const handleResponse = () => {
    setModal(false);
    handleStop();
  };

  useEffect(() => {
    if (status !== "free") {
      setCounter(counter + 1);
    }
    if (counter >= finalCount) {
      setStatus("finished");
      setProgress(false);
    }
    if (counter >= maxCount) setStatus("overtime");
    if (counter >= alarmCount) beepSound.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clock]);

  return (
    <>
      <div
        className={`out-box animate__animated has-background-${
          (status === "free" && "success") ||
          (status === "counting" && "warning") ||
          (status === "finished" && "danger") ||
          (status === "overtime" && "danger")
        } ${status === "overtime" && "animate__flash animate__infinite"}`}
      >
        <div
          className={`is-flex is-flex-centered has-background-black`}
          style={boxStyle}
        >
          <button className="button m-1" onClick={handlePlay}>
            {">"}
          </button>
          <button className="button m-1" onClick={handleStop}>
            {"[]"}
          </button>
          <button className="button m-1">{counter}</button>
        </div>
        <progress
          className={`progress is-info mt-2 ${!progress && "pointer"}`}
          max={finalCount}
          value={counter}
          onClick={!progress && (() => setModal(true))}
        />
      </div>
      <div className={`modal ${modal && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-content is-flex is-flex-column">
          <button
            className="button is-success is-large is-outlined m-4"
            onClick={handleResponse}
          >
            Negative
          </button>
          <button
            className="button is-danger is-large is-outlined m-4"
            onClick={handleResponse}
          >
            Positive
          </button>
          <button
            className="button is-warning is-large is-outlined m-4"
            onClick={handleResponse}
          >
            Invalid
          </button>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setModal(false)}
        ></button>
      </div>
    </>
  );
};

export default Box;
