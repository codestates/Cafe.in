import {
  CAFE_LIST_COUNT,
  CAFE_LIST_COUNT_RESET,
  CAFE_LIST_CATEGORY,
  CAFE_LIST_COUNT_HASH,
} from "./type";

export const initalState = {
  listCount: 5,
  category: "",
};

export const postCountAction = () => {
  return {
    type: CAFE_LIST_COUNT,
  };
};

export const postCategoryAction = (category) => {
  return {
    type: CAFE_LIST_CATEGORY,
    category,
  };
};

export const postCountHashAction = (data) => {
  return {
    type: CAFE_LIST_COUNT_HASH,
    data,
  };
};

const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case CAFE_LIST_COUNT:
      return {
        ...state,
        listCount: state.listCount + 5,
      };
    case CAFE_LIST_COUNT_RESET:
      return {
        ...state,
        listCount: 5,
      };
    case CAFE_LIST_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case CAFE_LIST_COUNT_HASH:
      return {
        ...state,
        countHash: action.data,
      };
    default:
      return state;
  }
};

export default postReducer;
