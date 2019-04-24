import { combineReducers } from 'redux';
import * as ACTIONS from '../actions/login_action';

var userLogin = function(state = false, action){
  switch (action.type) {
    case ACTIONS.SET_USER_LOGIN:
      return action.userLogin;
    default:
      return state;
  }
}

var loginErrorMsg = function(state = '', action){
  switch (action.type) {
    case ACTIONS.SET_LOGIN_ERROR_MSG:
      return action.msg;
    default:
      return state;
  }
}

var userInfo = function(state = {}, action){
  switch (action.type) {
    case ACTIONS.SET_USER_INFO:
      return action.userInfo;
    default:
      return state;
  }
}

const loginReducer = combineReducers({
    userLogin,
    loginErrorMsg,
    userInfo
})

export default loginReducer;
