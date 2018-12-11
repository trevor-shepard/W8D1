export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_USER = 'LOGOUT_USER';
import * as ApiUtils from '../util/session_api_util'

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})


export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const login = (user) => (dispatch) => {
  return (
    ApiUtils.loginUser(user)
      .then(user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
  );
}

export const signup = (user) => (dispatch) => {
  return (
    ApiUtils.signupUser(user)
      .then(
        user => dispatch(receiveCurrentUser(user)), 
        errors => dispatch(receiveErrors(errors.responseJSON)))
  );
}

export const logout = () => (dispatch) => {
  return (
    ApiUtils.logoutUser()
      .then(
        () => dispatch(logoutUser()),
        (errors) => dispatch(receiveErrors(errors)))
  );
};


