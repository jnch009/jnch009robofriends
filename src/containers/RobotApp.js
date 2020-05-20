import React, { Component } from 'react';

import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import Filter from '../components/Filter';
import Scroll from '../components/Scroll';

import './RobotApp.css';

//smart component
class RobotApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      search: '',
    };
  }

  componentDidMount() {
    //convert to json then update the state
    //fetch makes a request to a server, available on browsers
    //part of the window object
    console.log(this.props.store.getState());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  handleInput = input => {
    this.setState({
      search: input.target.value.toLowerCase(),
    });
  };

  render() {
    const { robots, search } = this.state;
    const robotsFiltered = robots.filter(robot =>
      robot.name.toLowerCase().includes(search),
    );

    return !robots.length ? (
      <div className='flex justify-center items-center vh-75'>
        <h1>Loading</h1>
      </div>
    ) : (
      <div className='tc flex flex-column items-center'>
        <h1 className='f1-l f2-m f3'>ROBOFRIENDS</h1>
        <Filter handleInput={this.handleInput} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={robotsFiltered} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default RobotApp;
