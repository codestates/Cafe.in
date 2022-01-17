import { GET_CAFE_INFO_FAILURE, GET_CAFE_INFO_REQUEST, GET_CAFE_INFO_SUCCESS } from "../../types";

const initialState = {
  loading: false,
  data: {
    selectedPost : {},
    positiveTag: [],
    negativeTag: [],
    getHashtagUserId: [],
  },
  error: ''
}

const cafeInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAFE_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case GET_CAFE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      }
    case GET_CAFE_INFO_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      }
    default: return state
  }
}

export default cafeInfoReducer