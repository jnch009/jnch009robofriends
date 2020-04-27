import React, { Component, Fragment } from "react";
import Filter from "./Filter";
import CardList from "./CardList";
import Scroll from "./Scroll";
import "./RobotApp.css";

//smart component
class RobotApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      search: "",
    };
  }

  componentDidMount() {
    //convert to json then update the state
    //fetch makes a request to a server, available on browsers
    //part of the window object
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  handleInput = (input) => {
    this.setState({
      search: input.target.value.toLowerCase(),
    });
  };

  render() {
    const robotsFiltered = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.search)
    );

    if (this.state.robots.length === 0) {
      return (
        <div className="flex justify-center items-center vh-75">
          <h1>Loading</h1>
        </div>
      );
    }

    return (
      <Fragment>
        <div className="tc flex flex-column items-center">
          <h1 className="f1">ROBOFRIENDS</h1>
          <Filter handleInput={this.handleInput} />
          <Scroll>
            <CardList robots={robotsFiltered} />
          </Scroll>
        </div>
      </Fragment>
    );
  }
}

export default RobotApp;
