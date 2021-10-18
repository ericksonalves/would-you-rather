import { combineReducers } from 'redux';
import loading from './loading';
import user from './user';
import users from './users';

export default combineReducers({
  loading,
  user,
  users,
});
