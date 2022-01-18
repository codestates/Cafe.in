import { DENIED_GEOLOCATION, GET_GEOLOCATION, USER_LOCATION } from "../../types";

const initialState = {
  userLatLong: null,
};

const userLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOCATION:
      return {
        ...state,
        userLatLong: { lat: action.lat, long: action.long },
      };
    case GET_GEOLOCATION:
      return {
        ...state,
        userLatLong: { lat: action.payload.coords.latitude, long: action.payload.coords.longitude },
      }
    case DENIED_GEOLOCATION:
      return {
        ...state,
        userLatLong: { lat: 37.4988, long: 127.06314 },
      }
    default:
      return state;
  }
};

export default userLocationReducer;
