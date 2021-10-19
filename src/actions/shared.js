import { showLoading, hideLoading } from 'react-redux-loading';
import * as API from '../data/api';
import * as storageUtils from '../data/storage';
import { findMatchingUserId } from '../utils/dataUtils';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveDataAction(users, user) {
  return {
    type: RECEIVE_DATA,
    users,
    user,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return API.getUsers().then((users) => {
      const userId = storageUtils.getUserId();
      const user = findMatchingUserId(userId, users);

      dispatch(receiveDataAction(users, user));
      dispatch(hideLoading());
    });
  };
}
