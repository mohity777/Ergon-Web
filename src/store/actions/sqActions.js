import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";
import { SET_SQS } from "../../utils/types";

const setSqs = payload => ({type: SET_SQS, payload})

export const getSqs = () => async (dispatch) => {
  try {
      const res = await Api.get(PATH.getSqs);
      dispatch(setSqs(res?.data || []))
  } catch (err) {}
};
