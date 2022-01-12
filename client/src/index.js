import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// React-Redux import
import { Provider } from "react-redux"; // Provider component
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


import App from "./App";
// React-Redux
import rootReducer from "./store/rootReducer";

const middleware = [];
// middleware.push(logger);

ReactDOM.render(
  <Provider store={createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
