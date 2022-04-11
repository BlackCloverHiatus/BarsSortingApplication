import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BarsHolder from "./Components/BarsHolder";
import "bootstrap/dist/css/bootstrap.css";
import RecursiveInsertionSort from "./Components/RecursiveInsertionSort";

ReactDOM.render(
  <React.StrictMode>
    <RecursiveInsertionSort></RecursiveInsertionSort>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
