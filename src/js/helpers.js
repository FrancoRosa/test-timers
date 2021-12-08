import beep from "../assets/beep.mp3";

export const setSavedStorage = (key, obj) => {
  window.localStorage.setItem(key, JSON.stringify(obj));
};

export const beepSound = new Audio(beep);
