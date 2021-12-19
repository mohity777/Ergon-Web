import { message } from "antd";

export const getErrorMsg = (err) => {
  let errMsg = "";
  if (!err) errMsg = "Network Error";
  else {
    if (err?.response) {
      if (err?.response?.data?.detail) errMsg = err.response.data.detail;
      else if (err?.response?.status)
        errMsg = `Response failed with status ${err?.response?.status}`;
    } else if (err?.request) {
      errMsg = `The Request was made but no Response was received: ${err.message}`
    } else errMsg = `No Request made: ${err?.message}`
  }
  return errMsg;
};

export const getMenuItemKey = (path) => {
  if (path == "/SQDetails") return "/SQ";
  else return path;
};

export const notifyError = (msg) => {
  message.error(msg);
};

export const notifySuccess = (msg) => {
  message.success(msg);
};

export const notifyInfo = (msg) => {
  message.info(msg);
};
