import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { initAxios } from "./Helpers/auth-helpers";
import { UserProvider } from "./Context/user-context";
import { ModalProvider } from "./Context/modal-context";
initAxios();
ReactDOM.render(
  <ModalProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ModalProvider>,
  document.getElementById("root")
);
