import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants.js';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users', {
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin':
        'https://elegant-liskov-e5881a.netlify.app/',
    },
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data.length !== undefined ? data : [],
      });
    })
    .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }));
};
