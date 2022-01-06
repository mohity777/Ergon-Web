import { SET_RFQ_REDUCER } from "../../utils/types";

const INITIAL_STATE = {
  myRfqs: [],
  rfqs: []
};

const rfqReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RFQ_REDUCER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default rfqReducer;
