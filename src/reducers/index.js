import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    counter: counterReducer,
    error: errorReducer,
    user: userReducer
});