import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";
import { notifySuccess } from "../../utils/functions";
import { SET_RFQ_REDUCER } from "../../utils/types";
import { setSqReducer } from "./sqActions";

export const setRfqReducer = payload => ({ type: SET_RFQ_REDUCER, payload })

export const createRfq = (data) => async (dispatch, getState) => {
  try {
    const {
      category,
      subCategory,
      title,
      description,
      design,
      qty,
      budget,
      creditPeriod,
      deliveryLocation,
      applicationCloseTime,
      note,
    } = data;

    const body = {
      category,
      subCategory,
      title,
      description,
      design,
      qty,
      budget,
      creditPeriod,
      deliveryLocation,
      applicationCloseTime,
      note,
    };
    const res = await Api.post(PATH.createRfq, body);
    const newMyRfqs = [( res?.data || {} ),...(getState().rfq?.myRfqs || [])];
    dispatch(setRfqReducer({ myRfqs: newMyRfqs }));
    notifySuccess("RFQ creted Successfully");
  } catch (err) {
    throw err;
  }
};

export const getRfs = () => async (dispatch) => {
    try{
        const res = await Api.get(PATH.getRfqs);
        dispatch(setSqReducer({ sqs: res?.data || [] }));
    }catch(err){}
}

export const getMyRfqs = () => async (dispatch) => {
  try {
    const res = await Api.get(PATH.getMyRfqs);
    dispatch(setRfqReducer({ myRfqs: res?.data || [] }));
  } catch (err) {}
};
