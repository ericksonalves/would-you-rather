import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from '../data/api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveDataAction(questions, users) {
  return {
    type: RECEIVE_DATA,
    questions,
    users,
  };
}

export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());
    const questions = await API.getQuestions();
    const users = await API.getUsers();
    dispatch(receiveDataAction(questions, users));
    dispatch(hideLoading());
  };
}
