import { SET_SQ_REDUCER } from "../../utils/types";

const INITIAL_STATE = {
  sqs: [],
};

const sqReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SQ_REDUCER:
      return { ...state.sqs, ...action.payload };
    default:
      return state;
  }
};

export default sqReducer;
