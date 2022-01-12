import { combineReducers } from 'redux';

import modalTypeReducer from './reducers/modalTypeReducer';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  modalType: modalTypeReducer,
  isLogin: loginReducer,
})

export default rootReducer;