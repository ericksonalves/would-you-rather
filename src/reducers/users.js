import { RECEIVE_DATA } from '../actions/shared';
import { ADD_ANSWER, ADD_QUESTION } from '../actions/question';

export default function users(state = [], action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.users;
    case ADD_ANSWER:
      const { questionId, userId, answer } = action;

      let user = state.find((u) => u.id === userId);

      user.answers[questionId] = answer;

      return state.filter((u) => u.id !== user.id).concat([user]);
    case ADD_QUESTION:
      const question = action.question;

      let author = state.find((u) => u.id === question.author);

      author.questions = author.questions.concat([question.id]);

      return state.filter((u) => u.id !== author.id).concat([author]);
    default:
      return state;
  }
}
