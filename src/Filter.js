import React, { Fragment } from "react";
import CardList from "./CardList";

const Filter = ({ robots }) => {
  const search = "leanne";
  const filterRobots = robots.filter((robot) => {
    if (robot.name.toLowerCase().includes(search)) {
      return robot;
    }
  });

  return (
    <Fragment>
      <CardList robots={filterRobots} />
    </Fragment>
  );
};

export default Filter;
