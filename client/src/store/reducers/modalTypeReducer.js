import { CLICK_MODAL_TYPE } from "../types";

// Initial State
const initialState = {
  clickedModalType: ''
};

// Reducer
const modalTypeReducer = (state = '', action) => {
  switch(action.type) {
    case CLICK_MODAL_TYPE: return {
      ... state,
      clickedModalType: action.payload
    }
    default: return state;
  }
}

export default modalTypeReducer;