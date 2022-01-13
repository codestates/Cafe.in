import { LOGIN_USER_INFO } from "../../types";

// Initial State
const initialState = {
  userInfo: null,
};

// Reducer
const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default userInfoReducer;
