import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { beepSound } from "../js/helpers";

const Box = ({ test, setReady, setFree }) => {
  const { id, specimenID } = test;
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState("free"); // free - counting - finished - overtime

  const size = useStoreState((state) => state.size);
  const pxWidth = useStoreState((state) => state.pxWidth);
  const cmWidth = useStoreState((state) => state.cmWidth);
  const clock = useStoreState((state) => state.clock);
  const time = useStoreState((state) => state.time);
  const { ready, limit, alarm } = time;

  const ratio = pxWidth / cmWidth;
  const sizePx = [parseInt(size[0] * ratio), parseInt(size[1] * ratio)];

  const boxStyle = {
    height: sizePx[1],
    width: sizePx[0],
    minHeight: sizePx[1],
    minWidth: sizePx[0],
  };

  const handleStart = () => {
    setStatus("counting");
  };

  const handleStop = () => {
    setStatus("free");
    setCounter(0);
    setReady(id, false);
    setFree(id);
  };

  useEffect(() => {
    if (status !== "free") {
      setCounter(counter + 1);
    }
    if (counter >= ready) {
      setStatus("finished");
      setReady(id, true);
    }
    if (counter >= limit) setStatus("overtime");
    if (counter >= alarm) beepSound.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clock]);

  useEffect(() => {
    if (specimenID !== null) handleStart();
    else handleStop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specimenID]);

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
          className={`is-flex is-flex-centered has-background-black is-flex-column`}
          style={boxStyle}
        >
          <p className="help is-success box-code is-size-4">{specimenID}</p>
          <div className="field is-grouped">
            <button
              className="button m-1 is-small is-rounded"
              onClick={handleStart}
            >
              {">"}
            </button>
            <button
              className="button m-1 is-small is-rounded"
              onClick={handleStop}
            >
              {"[]"}
            </button>
            <button className="button m-1 is-small is-rounded">
              {counter}
            </button>
          </div>
        </div>
        <progress
          className={`progress is-info mt-2`}
          max={ready}
          value={counter}
        />
      </div>
    </>
  );
};

export default Box;
