import { action } from "easy-peasy";

const getSavedStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key)) || initial[key];
};

const initial = {
  pxWidth: 1366,
  cmWidth: 41,
};

export default {
  pxWidth: getSavedStorage("pxWidth"),
  setPxWith: action((state, pxWidth) => {
    state.pxWidth = pxWidth;
  }),

  cmWidth: getSavedStorage("cmWidth"),
  setCmWith: action((state, cmWidth) => {
    state.cmWidth = cmWidth;
  }),
};
