import { combineReducers } from 'redux';
import loading from './loading';
import users from './users';

export default combineReducers({
  loading,
  users,
});
