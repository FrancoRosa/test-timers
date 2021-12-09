import Navigator from "./Navigator";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { networkSave, networkScan } from "../js/api";

const WifiConfig = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [networks, setNetworks] = useState([]);
  const ssidRef = useRef();
  const passRef = useRef();

  const handleSave = () => {
    setLoading(true);
    networkSave(ssidRef.current.value, passRef.current.value);
    setTimeout(() => navigate("/home"), 1000);
  };

  useEffect(() => {
    networkScan().then((res) => setNetworks(res.networks));
  }, []);

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
          <p className="mt-4 has-text-centered">Available networks</p>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th> SSID </th>
                <th> SNR </th>
              </tr>
            </thead>
            <tbody>
              {networks.map((n) => (
                <tr>
                  <td>{n.ssid}</td>
                  <td>{n.snr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default WifiConfig;
