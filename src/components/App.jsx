import { Routes, Route } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import model from "../js/model";
import Home from "./Home";
import Config from "./Config";
import WifiConfig from "./WifiConfig";

const store = createStore(model);

const App = () => {
  return (
    <div>
      <StoreProvider store={store}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="config" element={<Config />} />
          <Route path="wifi" element={<WifiConfig />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </StoreProvider>
    </div>
  );
};

export default App;
