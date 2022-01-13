import { CAFE_LIST_CATEGORY } from "../../types";

// Initial State
const initialState = {
  category: "",
};

// Reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAFE_LIST_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
};

export default categoryReducer;
