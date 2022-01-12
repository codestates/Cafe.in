import { combineReducers } from 'redux';

import modalTypeReducer from './reducers/modalTypeReducer';
import loginReducer from './reducers/loginReducer';
import showModalReducer from './reducers/showModalReducer';
import userInfoReducer from './reducers/userInfoReducer';

const rootReducer = combineReducers({
  modalType: modalTypeReducer,
  isLogin: loginReducer,
  showModal: showModalReducer,
  userInfo: userInfoReducer,
})

export default rootReducer;