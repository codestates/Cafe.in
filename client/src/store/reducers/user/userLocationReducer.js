import { USER_LOCATION } from "../../types";

const initialState = {
  userLatLong: { lat: 1, long: 127.06314 },
};

const userLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOCATION:
      return {
        ...state,
        userLatLong: { lat: action.lat, long: action.long },
      };
    default:
      return state;
  }
};

export default userLocationReducer;
