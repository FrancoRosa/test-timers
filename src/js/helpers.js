export const setSavedStorage = (key, obj) => {
  window.localStorage.setItem(key, JSON.stringify(obj));
};
