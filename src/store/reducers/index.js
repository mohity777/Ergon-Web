import drawerReducer from "./drawerReducer";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  drawer: drawerReducer,
});

const Reducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return rootReducers(state, action);
};

export default Reducer;