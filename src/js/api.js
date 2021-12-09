import axios from "axios";

const localhost = `http://${window.location.hostname}:9999`;
const remotehost = `http://${window.location.hostname}:10000`;

export const sendResult = async (barcode, result, id, start, end) => {
  const payload = { id, barcode, result, start, end };
  console.log("... sending results:", payload);
  const url = `${remotehost}/result`;
  const response = await axios.post(url, { barcode, result, id });
  return response.data;
};

export const networkScan = async () => {
  console.log("... getting events");
  const url = `${localhost}/network/scan`;
  const response = await axios.get(url);
  return response.data;
};

export const networkSave = async (ssid, pass) => {
  console.log("... configure wifi");
  const url = `${localhost}/network/save`;
  const response = await axios.post(url, { ssid, pass });
  return response.data;
};

export const shutdown = async () => {
  console.log("... shutting down");
  const url = `${localhost}/shutdown`;
  const response = await axios.post(url);
  return response.data;
};

export const restart = async () => {
  console.log("... restarting");
  const url = `${localhost}/restart`;
  const response = await axios.post(url);
  return response.data;
};

export const getDeviceId = async () => {
  console.log("... get device ID");
  const url = `${localhost}/device/id`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};

export const getCommit = async () => {
  console.log("... get git commit");
  const url = `${localhost}/git/commit`;
  const response = await axios.get(url);
  return response.data;
};
