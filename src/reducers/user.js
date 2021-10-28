import { SET_LOGGED_USER } from '../actions/user';
import { RECEIVE_DATA } from '../actions/shared';

export default function user(state = null, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return state;
    case SET_LOGGED_USER:
      return action.user;
    default:
      return state;
  }
}
