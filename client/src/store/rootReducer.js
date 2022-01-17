import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import modalTypeReducer from "./reducers/post/modalTypeReducer";
import loginReducer from "./reducers/user/loginReducer";
import showModalReducer from "./reducers/post/showModalReducer";
import userInfoReducer from "./reducers/user/userInfoReducer";
import userLocationReducer from "./reducers/user/userLocationReducer";
import listCountReducer from "./reducers/post/listCountReducer";
import categoryReducer from "./reducers/post/categoryReducer";
import addressReducer from "./reducers/user/addressReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "modalTypeReducer",
    "showModalReducer",
    "listCountReducer",
    "categoryReducer",
    "userLocationReducer",
    "addressReducer",
  ],
};

export const rootReducer = combineReducers({
  modalType: modalTypeReducer,
  isLogin: loginReducer,
  showModal: showModalReducer,
  userInfo: userInfoReducer,
  userLocation: userLocationReducer,
  listCountReducer,
  categoryReducer,
  addressReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
