import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// React-Redux import
import { Provider } from "react-redux"; // Provider component
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
// React-Redux
import { persistedReducer } from "./store/rootReducer";

const middleware = [];
// middleware.push(logger);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
