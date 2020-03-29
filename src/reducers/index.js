import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import followerReducers from './followerReducers';

export default combineReducers({
  counter: counterReducer,
  error: errorReducer,
  user: userReducer,
  followers: followerReducers
});
