import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./features/store";

import {AuthProvider } from './components/AutoContext';  // Adjust the path as needed

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <AuthProvider>
    <App />
  </AuthProvider>
</Provider>
);

reportWebVitals();
