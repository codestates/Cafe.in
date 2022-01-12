import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistedReducer from "../reducer/index";
import rootReducer from "../reducer/index";
import { persistStore } from "redux-persist";

const middlewere = [];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewere))
);

export const persistor = persistStore(store);
// const wrapper = createWrapper(configureStore, {
//   debug: process.env.NODE_ENV === "development",
// });

export default { store, persistor };
