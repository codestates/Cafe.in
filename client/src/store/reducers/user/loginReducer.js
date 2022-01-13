import { LOGIN } from "../../types";

// Initial State
const initialState = {
  isLogin: false,
};

// Reducer
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
