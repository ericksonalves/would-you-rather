export function dictToList(dict) {
  return Object.keys(dict).map(function (key) {
    return dict[key];
  });
}

export function getQuestionPreview(question) {
  const optionOne = question.optionOne.text;

  return `...${optionOne} or...`;
}

export function findMatchingUserId(userId, users) {
  const matchedUser = users.find((u) => u.id === userId);
  const user = matchedUser !== undefined ? matchedUser : null;

  return user;
}

export function hasAnsweredQuestion(userId, question) {
  const voters = new Set(
    question.optionOne.votes.concat(question.optionTwo.votes)
  );

  return voters.has(userId);
}

export function userScoreComparator(userA, userB) {
  const answeredQuestionsByA = Object.keys(userA.answers).length;
  const createdQuestionsByA = userA.questions.length;
  const scoreA = answeredQuestionsByA + createdQuestionsByA;

  const answeredQuestionsByB = Object.keys(userB.answers).length;
  const createdQuestionsByB = userB.questions.length;
  const scoreB = answeredQuestionsByB + createdQuestionsByB;

  return scoreB - scoreA;
}
