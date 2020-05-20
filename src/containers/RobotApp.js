import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import Filter from '../components/Filter';
import Scroll from '../components/Scroll';
import { setSearchField } from '../actions';

import './RobotApp.css';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event =>
      dispatch(setSearchField(event.target.value.toLowerCase())),
  };
}

//smart component
class RobotApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    //convert to json then update the state
    //fetch makes a request to a server, available on browsers
    //part of the window object
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  render() {
    const { robots } = this.state;
    const {searchField, onSearchChange} = this.props;
    const robotsFiltered = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField),
    );

    return !robots.length ? (
      <div className='flex justify-center items-center vh-75'>
        <h1>Loading</h1>
      </div>
    ) : (
      <div className='tc flex flex-column items-center'>
        <h1 className='f1-l f2-m f3'>ROBOFRIENDS</h1>
        <Filter handleInput={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={robotsFiltered} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RobotApp);
