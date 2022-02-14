import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App Phonebook onSubmit={(name) => console.log(name)} />
  </React.StrictMode>,
  document.getElementById("root")
);
