import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from '../data/api';
import * as storageUtils from '../data/storage';
import { findMatchingUserId } from '../utils/dataUtils';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveDataAction(questions, users, user) {
  return {
    type: RECEIVE_DATA,
    questions,
    users,
    user,
  };
}

export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());
    const questions = await API.getQuestions();
    const users = await API.getUsers();
    const userId = storageUtils.getUserId();
    const user = findMatchingUserId(userId, users);
    dispatch(receiveDataAction(questions, users, user));
    dispatch(hideLoading());
  };
}
