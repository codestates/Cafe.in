import { LOG_IN, LOG_OUT, USER_LOCATION } from "./type";

export const initalState = {
  isLoggedIn: false,
  me: null,
  userLatLong: { lat: 37.4988, long: 127.0625 },
};

export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const logoutAction = () => {
  return {
    type: LOG_OUT,
  };
};

export const userLocationAction = (lat, long) => {
  return {
    type: USER_LOCATION,
    lat,
    long,
  };
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    case USER_LOCATION:
      return {
        ...state,
        userLatLong: { lat: action.lat, long: action.long },
      };
    default:
      return state;
  }
};

export default userReducer;
