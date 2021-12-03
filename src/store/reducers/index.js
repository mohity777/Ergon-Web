import drawerReducer from "./drawerReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  drawer: drawerReducer,
  user: userReducer,
});

const Reducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return rootReducers(state, action);
};

export default Reducer;