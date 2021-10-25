import { showLoading, hideLoading } from 'react-redux-loading';
import * as API from '../data/api';

export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
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
