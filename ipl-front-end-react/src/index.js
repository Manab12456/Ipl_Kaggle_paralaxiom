import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Nav from "./nav";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FetchApi from "./FetchApi";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
