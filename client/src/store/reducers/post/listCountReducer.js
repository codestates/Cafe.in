import { CAFE_LIST_COUNT } from "../../types";

// Initial State
const initialState = {
  listCount: 5,
};

// Reducer
const listCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAFE_LIST_COUNT:
      return {
        ...state,
        listCount: state.listCount + 5,
      };
    default:
      return state;
  }
};

export default listCountReducer;
