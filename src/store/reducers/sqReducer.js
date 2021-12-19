import { SET_SQS } from "../../utils/types";

const INITIAL_STATE = {
  sqs: [],
};

const sqReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SQS:
      return { ...state.sqs, sqs: action.payload };
    default:
      return state;
  }
};

export default sqReducer;
