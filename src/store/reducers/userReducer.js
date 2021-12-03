import { SET_USER } from "../../utils/types";

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
