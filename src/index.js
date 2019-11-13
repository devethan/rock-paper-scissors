import "./index.css";

import App from "./App";
import { Store as DefaultStore } from "./store";
import Firebase from "./components/Firebase";
// store
import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";

const firebase = new Firebase();
const defaultStore = new DefaultStore(firebase); // make default store instance

ReactDOM.render(
  <Provider store={defaultStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
