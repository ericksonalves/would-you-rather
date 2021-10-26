import { RECEIVE_DATA } from '../actions/shared';
import { ADD_ANSWER, ADD_QUESTION } from '../actions/question';

export default function questions(state = [], action) {
  switch (action.type) {
    case ADD_ANSWER:
      const { questionId, userId, answer } = action;

      let question = state.find((question) => question.id === questionId);

      question[answer].votes = question[answer].votes.concat([userId]);

      return state.filter((q) => q.id !== question.id).concat([question]);
    case ADD_QUESTION:
      return state.concat([action.question]);
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}
