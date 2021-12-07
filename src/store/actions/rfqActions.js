import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";
import { IN_RFQ, REQUEST_RFQ, RFQ_FAILURE } from "../../utils/types";

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
