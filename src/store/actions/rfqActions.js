import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";
import { GET_RFQ_FAILURE, GET_RFQ_REQUEST, GET_RFQ_SUCCESS, IN_RFQ, REQUEST_RFQ, RFQ_FAILURE } from "../../utils/types";

export const createRfq = (data) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_RFQ });
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
    dispatch({ type: IN_RFQ, payload: res });
  } catch (err) {
    dispatch({ type: RFQ_FAILURE, payload: "Error" });
    throw err;
  }
};


export const getRfq = () => async (dispatch) => {
  try {
    dispatch({ type: GET_RFQ_REQUEST });
    
    const res = await Api.get(PATH.getRfq);

    // console.log("Reducer state is ",res);
    // console.log("Response data is ",res.data);
    dispatch({ type: GET_RFQ_SUCCESS, payload: res.data});
  } catch (err) {
    dispatch({ type: GET_RFQ_FAILURE, payload: err.message });
    throw err;
  }
};
