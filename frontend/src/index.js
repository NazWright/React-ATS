// Redux data layer control
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

// create action creator with redux

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  // helps update new state
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
export default store;
