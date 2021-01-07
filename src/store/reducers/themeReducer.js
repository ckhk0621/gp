import * as Actions from "../actions";

const initState = {
  data: [],
  form: {
    email: '',
    firstName: '',
    lastName: ''
  },
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
    
    case Actions.SET_FORM_VALUE:
      return {
        ...state,
        form: action.value,
        lastAction: action.type
      };
  

    default:
      return state;
  }
};

export default themeReducer;
