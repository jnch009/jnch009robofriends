import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import RobotApp from "./RobotApp";

ReactDOM.render(
  <React.StrictMode>
    {/* <Filter robots={robots} />
    <br />
    <CardList robots={robots} /> */}
    <RobotApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
