import {
  GET_CAFE_INFO_REQUEST,
  GET_CAFE_INFO_SUCCESS,
  ADD_LIKE,
  ADD_HASH,
} from "../../types";

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
      };
    case GET_CAFE_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedPost: action.payload.selectedPost,
        positiveTag: action.payload.positiveTag,
        negativeTag: action.payload.negativeTag,
        getHashtagUserId: action.payload.getHashtagUserId,
      };
    case ADD_LIKE:
      return {
        ...state,
        positiveTag: action.payload.positiveTag,
        negativeTag: action.payload.negativeTag,
        getHashtagUserId: action.payload.getHashtagUserId,
      };
    case ADD_HASH:
      return {
        ...state,
        selectedPost: {
          ...state.selectedPost,
          hash_tags: action.payload.selectedPost.hash_tags,
        },
        positiveTag: action.payload.positiveTag,
        negativeTag: action.payload.negativeTag,
        getHashtagUserId: action.payload.getHashtagUserId,
      };
    default:
      return state;
  }
};

export default cafeInfoReducer;
