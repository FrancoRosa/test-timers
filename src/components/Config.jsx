import Navigator from "./Navigator";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useState } from "react";
import { setSavedStorage } from "../js/helpers";

const Config = () => {
  const pxWidth = useStoreState((state) => state.pxWidth);
  const cmWidth = useStoreState((state) => state.cmWidth);
  const boxes = useStoreState((state) => state.boxes);
  const size = useStoreState((state) => state.size);

  const setPxWidth = useStoreActions((actions) => actions.setPxWidth);
  const setCmWidth = useStoreActions((actions) => actions.setCmWidth);
  const setBoxes = useStoreActions((actions) => actions.setBoxes);
  const setSize = useStoreActions((actions) => actions.setSize);

  const [pxRef, setPxRef] = useState(pxWidth);
  const [cmRef, setCmRef] = useState(cmWidth);
  const [boxesRef, setBoxesRef] = useState(boxes);
  const [sizeRef, setSizeRef] = useState(size);

  const handleSave = () => {
    setPxWidth(pxRef);
    setCmWidth(cmRef);
    setBoxes(boxesRef);
    setSize(sizeRef);

    setSavedStorage("pxWidth", pxRef);
    setSavedStorage("cmWidth", cmRef);
    setSavedStorage("boxes", boxesRef);
    setSavedStorage("size", sizeRef);
  };

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
            <label className="label">Width of screen in pixels</label>
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
            <label className="label">Width of screen in centimeters</label>
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
            <label className="label">Size of box in cm</label>
            <div className="control is-flex">
              <input
                className="input"
                type="number"
                placeholder="7"
                value={sizeRef[0]}
                onChange={(e) => setSizeRef([e.target.value, sizeRef[1]])}
              />
              <input
                className="input ml-4"
                type="number"
                placeholder="2"
                value={sizeRef[1]}
                onChange={(e) => setSizeRef([sizeRef[0], e.target.value])}
              />
            </div>
          </div>
          <button
            onClick={handleSave}
            className="button is-success is-outlined mt-4"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Config;
