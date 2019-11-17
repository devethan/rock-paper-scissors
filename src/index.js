import "./index.css";

import App from "./App";
import { Store as DefaultStore } from "./store";
import Firebase from "./components/Firebase";
import MainRouter from "./MainRouter";
import React from "react";
import ReactDOM from "react-dom";
// store
import { Provider as StoreProvider } from "mobx-react";
import ThemeProvider from "./components/constants/Theme";

const firebase = new Firebase();
const defaultStore = new DefaultStore(firebase); // make default store instance

ReactDOM.render(
  <ThemeProvider>
    <StoreProvider store={defaultStore}>
      <MainRouter />
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
