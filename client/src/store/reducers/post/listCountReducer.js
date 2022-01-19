import { CAFE_LIST_COUNT, CAFE_LIST_COUNT_RESET } from "../../types";

// Initial State
const initialState = {
  listCount: 7,
};

// Reducer
const listCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAFE_LIST_COUNT:
      return {
        ...state,
        listCount: state.listCount + 4,
      };
    case CAFE_LIST_COUNT_RESET:
      return {
        ...state,
        listCount: 7,
      };
    default:
      return state;
  }
};

export default listCountReducer;
