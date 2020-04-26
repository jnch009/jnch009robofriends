import React, { Component, Fragment } from "react";
import Filter from "./Filter";
import CardList from "./CardList";
import { robots } from "./robots";

class RobotApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      search: "",
    };
  }

  filterRobots = () =>
    robots.filter((robot) => {
      if (robot.name.toLowerCase().includes(this.state.search)) {
        return robot;
      }
    });

  handleInput = (input) => {
    this.setState(
      {
        search: input,
      },
      () => {
        this.setState({
          robots: this.filterRobots(),
        });
      }
    );
  };

  render() {
    return (
      <Fragment>
        <div class="flex flex-column">
          <Filter handleInput={this.handleInput} />
          <CardList robots={this.state.robots} />
        </div>
      </Fragment>
    );
  }
}

export default RobotApp;
