import drawerReducer from "./drawerReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import createReducer from "./rfqReducer";
import sqReducer from "./sqReducer";

const rootReducers = combineReducers({
  drawer: drawerReducer,
  user: userReducer,
  create:createReducer,
  sq: sqReducer
});

const Reducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return rootReducers(state, action);
};

export default Reducer;