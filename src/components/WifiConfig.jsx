import Navigator from "./Navigator";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

const WifiConfig = () => {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => navigate("/home"), 1000);
  };

  const ssidRef = useRef();
  const passRef = useRef();

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
                type="password"
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
          <p className="help">{message}</p>
        </div>
      </div>
    </>
  );
};

export default WifiConfig;
