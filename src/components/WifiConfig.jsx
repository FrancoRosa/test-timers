import Navigator from "./Navigator";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { networkSave } from "../js/api";

const WifiConfig = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const ssidRef = useRef();
  const passRef = useRef();

  const handleSave = () => {
    setLoading(true);
    networkSave(ssidRef.current.value, passRef.current.value);
    setTimeout(() => navigate("/home"), 1000);
  };

  return (
    <>
      <Navigator to="/home" />
      <div className="is-flex is-flex-centered config">
        <div>
          <h1 className="subtitle has-text-centered">Wifi Configuration</h1>
          <div className="field">
            <label className="label">SSID</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="WiFi SSID"
                ref={ssidRef}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="********"
                ref={passRef}
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
          <p className="help">{""}</p>
        </div>
      </div>
    </>
  );
};

export default WifiConfig;
