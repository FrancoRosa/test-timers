import Navigator from "./Navigator";

const Config = () => {
  return (
    <>
      <Navigator to="/home" />
      <div className="is-flex is-flex-centered">
        <div>
          <h1 className="subtitle has-text-centered">Configuration</h1>
          <div className="field">
            <label className="label">Number of places</label>
            <div className="control">
              <input className="input" type="number" placeholder="5" />
            </div>
          </div>
          <div className="field">
            <label className="label">Width of screen in pixels</label>
            <div className="control">
              <input className="input" type="number" placeholder="5" />
            </div>
          </div>
          <div className="field">
            <label className="label">Width of screen in centimeters</label>
            <div className="control">
              <input className="input" type="number" placeholder="5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Config;
