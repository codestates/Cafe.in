import { combineReducers } from "redux";
import userReducer from "./user";
import postReducer from "./post";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["postReducer"],
};

const rootReducer = combineReducers({
  userReducer,
  postReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
