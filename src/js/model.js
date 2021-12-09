import { action } from "easy-peasy";

const getSavedStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key)) || initial[key];
};

const initial = {
  pxWidth: 1366,
  cmWidth: 41,
  boxes: 10,
  size: [7, 2],
  time: {
    ready: 15,
    alarm: 19,
    limit: 20,
  },
};

const model = {
  pxWidth: getSavedStorage("pxWidth"),
  setPxWidth: action((state, pxWidth) => {
    state.pxWidth = pxWidth;
  }),

  cmWidth: getSavedStorage("cmWidth"),
  setCmWidth: action((state, cmWidth) => {
    state.cmWidth = cmWidth;
  }),

  boxes: getSavedStorage("boxes"),
  setBoxes: action((state, boxes) => {
    state.boxes = boxes;
  }),

  size: getSavedStorage("size"),
  setSize: action((state, size) => {
    state.size = size;
  }),

  time: getSavedStorage("time"),
  setTime: action((state, time) => {
    state.time = time;
  }),

  clock: Date(),
  setClock: action((state, clock) => {
    state.clock = clock;
  }),

  network: false,
  setNetwork: action((state, network) => {
    state.network = network;
  }),
};

export default model;
