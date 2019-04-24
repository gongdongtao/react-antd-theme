import { combineReducers } from 'redux';

import loginReducer from './login_reducer';
import homeReducer from './home_reducer';

const rootReducer = combineReducers({
  loginReducer,
  homeReducer
});

export default rootReducer;