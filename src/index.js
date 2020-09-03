import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { initAxios } from "./Helpers/auth-helpers";
import { UserProvider } from "./Context/user-context";
initAxios();
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
