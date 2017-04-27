import * as ActionTypes from './actionTypes';

export const addUserSuccess = (newUser) => {
  return {
    type: ActionTypes.ADD_USER_SUCCESS,
    payload: newUser,
  };
};

export const addUser = (newUser) => {
  return (dispatch) => {
    fetch('http://localhost:1234/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: ActionTypes.FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    fetch('http://localhost:1234/users')
      .then(res => res.json())
      .then(data => dispatch(fetchUserSuccess(data)));
  };
};
