import { SHOW_MODAL } from "../../types";

// Initial State
const initialState = {
  isShowModal: false,
};

// Reducer
const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isShowModal: action.payload,
      };
    default:
      return state;
  }
};

export default showModalReducer;
