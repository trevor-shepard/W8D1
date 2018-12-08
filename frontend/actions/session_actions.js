const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
const LOGOUT_USER = 'LOGOUT_USER';
import * as ApiUtils from '../util/session_api_util'

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})


export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const logoutUser = () => ({
  type: LOGOUT_USER
})

export const login = (user) => (dispatch) => {
  return (
    ApiUtils.loginUser(user)
      .then(user => dispatch(receiveCurrentUser(user)))
  );
}

export const signup = (user) => (dispatch) => {
  return (
    ApiUtils.signupUser(user)
      .then(user => dispatch(receiveCurrentUser(user)))
  );
}

export const logout = () => (dispatch) => {
  return (
    ApiUtils.logoutUser()
      .then(() => dispatch(logoutUser()))
  );
}


