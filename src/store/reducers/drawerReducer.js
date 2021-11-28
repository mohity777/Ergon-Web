import { TOGGLE_DRAWER, TOGGLE_SIDE_MENU } from "../actions/drawerActions";

const INITIAL_STATE = {
  sideMenuCollapsed: false,
  drawerVisible: false,
};

const drawerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, sideMenuCollapsed: !state.sideMenuCollapsed };
    case TOGGLE_DRAWER:
      return { ...state, drawerVisible: !state.drawerVisible };
    default:
      return state;
  }
};

export default drawerReducer;
