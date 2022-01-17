import { GET_CAFE_INFO_REQUEST, GET_CAFE_INFO_SUCCESS } from "../../types";

const initialState = {
  isLoading: false,
  selectedPost: {},
  positiveTag: [],
  negativeTag: [],
  getHashtagUserId: [],
};

const cafeInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAFE_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_CAFE_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedPost: action.payload.selectedPost,
        positiveTag: action.payload.positiveTag,
        negativeTag: action.payload.negativeTag,
        getHashtagUserId: action.payload.getHashtagUserId,
      };
    default:
      return state;
  }
};

export default cafeInfoReducer;
