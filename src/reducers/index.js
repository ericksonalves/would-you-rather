import { combineReducers } from 'redux';
import loading from './loading';
import user from './user';
import users from './users';
import questions from './questions';

export default combineReducers({
  loading,
  user,
  users,
  questions,
});
