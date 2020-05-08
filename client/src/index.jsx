import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./context/auth/authContext";
import {initialState, reducer } from './context/auth/authReducer'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider initialState={initialState} reducer={reducer}>
        <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
