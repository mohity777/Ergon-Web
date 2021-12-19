import axios from "axios";
import { baseURL } from "./apiPath";
import { getErrorMsg, notifyError } from "./functions";

axios.interceptors.request.use(
  function (config) {
    const token  = localStorage.getItem('token')
    config.baseURL = baseURL;
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (_) => _,
  async (error) => {
    const errMsg = getErrorMsg(error);
    notifyError(errMsg);
    throw error;
  }
);

export default class Api {
  static async get(path, config) {
    try {
      const res = await axios.get(path, config);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log("$$$$$$$$$$$$$$$$$$$4", err?.response);
      throw err;
    }
  }

  static async post(path, body, config) {
    try {
      const res = await axios.post(path, body, config);
      return res.data;
    } catch (err) {
      console.log("$$$$$$$$$$$$$$$$$$$4", err?.response);
      throw err;
    }
  }

  static async put(path, body, config) {
    try {
      const res = await axios.put(path, body, config);
      return res.data;
    } catch (err) {
      throw err;
    }
  }

}
