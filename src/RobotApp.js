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

  handleInput = (input) => {
    this.setState(
      {
        search: input,
      },
      () => {
        this.setState({
          robots: robots.filter((robot) =>
            robot.name.toLowerCase().includes(this.state.search)
          ),
        });
      }
    );
  };

  render() {
    return (
      <Fragment>
        <div className="tc flex flex-column items-center">
          <h1>ROBOFRIENDS</h1>
          <Filter handleInput={this.handleInput} />
          <CardList robots={this.state.robots} />
        </div>
      </Fragment>
    );
  }
}

export default RobotApp;
