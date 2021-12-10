import beep from "../assets/beep.mp3";

export const getSavedStorage = (key, defaultVal) => {
  return JSON.parse(window.localStorage.getItem(key)) || defaultVal[key];
};

export const setSavedStorage = (key, obj) => {
  window.localStorage.setItem(key, JSON.stringify(obj));
};

export const appendToStorage = (key, obj) => {
  const values = getSavedStorage(key, { [key]: [] });
  values.push(obj);
  setSavedStorage(key, values);
};

export const removeFromStorage = (key, obj, target) => {
  const values = getSavedStorage(key, { [key]: [] });
  setSavedStorage(
    key,
    values.filter((x) => x[target] !== obj[target])
  );
};

export const beepSound = new Audio(beep);
