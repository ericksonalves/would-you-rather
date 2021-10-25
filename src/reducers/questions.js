import { RECEIVE_DATA } from '../actions/shared';
import { ADD_QUESTION } from '../actions/question';

export default function questions(state = [], action) {
  switch (action.type) {
    case ADD_QUESTION:
      return state.concat([action.question]);
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}
