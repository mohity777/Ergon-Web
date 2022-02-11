import { SET_GLOBAL_LOADER } from "../../utils/types";

const INITIAL_STATE = {
  loading: false
};

const globalLoaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GLOBAL_LOADER:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default globalLoaderReducer;
