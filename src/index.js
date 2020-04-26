import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import Card from "./Card";
import { robots } from "./robots";

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
