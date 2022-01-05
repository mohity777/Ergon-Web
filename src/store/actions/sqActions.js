import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";
import { SET_SQ_REDUCER } from "../../utils/types";

export const setSqReducer = payload => ({type: SET_SQ_REDUCER, payload})

export const getSqsByStatus = (status) => async (dispatch) => {
  try {
    const params = { status };
    const res = await Api.get(PATH.getMySQByStatus, { params });
    dispatch(setSqReducer({sqs: res?.data || []}))
  } catch (err) {}
};
