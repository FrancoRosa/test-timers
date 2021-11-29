import { Routes, Navigate, Route } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import model from "../js/model";
import Home from "./Home";
import Config from "./Config";

const App = () => {
  return (
    <Routes>
      <Route path="/home" component={Home} />
      <Route path="/config" component={Config} />
      <Route path="/" component={Home} />
    </Routes>
  );
};

export default App;
