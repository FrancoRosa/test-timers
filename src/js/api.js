import axios from "axios";

const localhost = `http://${window.location.hostname}:9999`;
const remotehost = `http://${window.location.hostname}:5102`;

export const sendResult = async (payload) => {
  console.log("... sending results:", payload);
  const url = `${remotehost}/api/covidratesting/device/ratestresult`;
  const response = await axiosPatch(url, payload);
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

const axiosPatch = (url, payload) => {
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  return axios.patch(url, payload);
}

const axiosGet = (url) => {
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  return axios.get(url);
}
