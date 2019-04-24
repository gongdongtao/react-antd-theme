import { combineReducers } from 'redux';
import { navType as _navType, navTheme as _navTheme } from '../../defaultSettings';
import * as ACTIONS from '../actions/home_action';

var loadingStatus = function(state = false, action){
  switch (action.type) {
    case ACTIONS.SET_LOADING_STATUS:
      return action.loadingStatus;
    default:
      return state;
  }
}

var language = function(state = 'zh', action){
  switch (action.type) {
    case ACTIONS.SET_LANGUAGE:
      return action.language;
    default:
      return state;
  }
}

var navType = function(state = _navType, action){
  switch (action.type) {
    case ACTIONS.SET_NAVTYPE:
      return action.navType;
    default:
      return state;
  }
}

var navTheme = function(state = _navTheme, action){
  switch (action.type) {
    case ACTIONS.SET_NAVTHEME:
      return action.navTheme;
    default:
      return state;
  }
}

const homeReducer = combineReducers({
    loadingStatus,
    language,
    navType,
    navTheme
})

export default homeReducer;
