import ServerClient from '../server/server_client'

export const SET_USER_LOGIN = 'SET_USER_LOGIN';
export const SET_LOGIN_ERROR_MSG = 'SET_LOGIN_ERROR_MSG';
export const SET_USER_INFO = 'SET_USER_INFO';

export function setUserLogin(userLogin) {
    return {
        type: SET_USER_LOGIN,
        userLogin
    }
}

export function setLoginErrorMsg(msg) {
    return {
        type: SET_LOGIN_ERROR_MSG,
        msg
    }
}

export function setUserInfo(userInfo) {
    return {
        type: SET_USER_INFO,
        userInfo
    }
}

export function login(param, callback){
  return dispatch => {
    ServerClient.login(param, (data)=>{
      console.log(data);
      dispatch(setUserInfo(data));
      callback && callback(true);
    }, (status) => {
      callback && callback(false);
    });
  }
}