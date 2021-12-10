import { action } from "easy-peasy";
import { getSavedStorage } from "./helpers";

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
  pxWidth: getSavedStorage("pxWidth", initial),
  setPxWidth: action((state, pxWidth) => {
    state.pxWidth = pxWidth;
  }),

  cmWidth: getSavedStorage("cmWidth", initial),
  setCmWidth: action((state, cmWidth) => {
    state.cmWidth = cmWidth;
  }),

  boxes: getSavedStorage("boxes", initial),
  setBoxes: action((state, boxes) => {
    state.boxes = boxes;
  }),

  size: getSavedStorage("size", initial),
  setSize: action((state, size) => {
    state.size = size;
  }),

  time: getSavedStorage("time", initial),
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
