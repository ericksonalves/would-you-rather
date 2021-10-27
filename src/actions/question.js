import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from '../data/api';

export const ADD_ANSWER = 'ADD_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

function addAnswer({ questionId, userId, answer }) {
  return {
    type: ADD_ANSWER,
    questionId,
    userId,
    answer,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddAnswer(answerInfo) {
  return (dispatch) => {
    dispatch(addAnswer(answerInfo));

    return API.saveAnswer({
      authedUser: answerInfo.userId,
      qid: answerInfo.questionId,
      answer: answerInfo.answer,
    });
  };
}

export function handleAddQuestion(firstOption, secondOption) {
  return (dispatch, getState) => {
    const { user } = getState();

    dispatch(showLoading());

    return API.saveQuestion({
      optionOneText: firstOption,
      optionTwoText: secondOption,
      author: user.id,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}
