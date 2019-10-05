import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// store
import { Provider } from "mobx-react";
import { Store as DefaultStore } from "./store";
const defaultStore = new DefaultStore(); // make default store instance

ReactDOM.render(
  <Provider store={defaultStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
