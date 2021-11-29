import { Routes, Navigate, Route } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import model from "../js/model";
import Home from "./Home";
import Config from "./Config";
import Navigator from "./Navigator";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="config" element={<Config />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
