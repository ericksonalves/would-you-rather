import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import loading from './loading';
import user from './user';
import users from './users';
import questions from './questions';

export default combineReducers({
  loading,
  user,
  users,
  questions,
  loadingBar: loadingBarReducer,
});
