import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import {initAxios} from './Helpers/auth-helpers'
initAxios();
ReactDOM.render(<App />, document.getElementById("root"));

