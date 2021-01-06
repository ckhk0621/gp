import * as Actions from "../actions";

const initState = {
  data: [],
  displayForm: false,
  displayPanel: false,
  lastAction: null
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.TOGGLE_FORM:
      return {
        ...state,
        displayForm: action.bol,
        lastAction: action.type
      };
    case Actions.TOGGLE_PANEL:
      return {
        ...state,
        displayPanel: action.bol,
        lastAction: action.type
      };
  

    default:
      return state;
  }
};

export default themeReducer;
