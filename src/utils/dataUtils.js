export function dictToList(dict) {
  return Object.keys(dict).map(function (key) {
    return dict[key];
  });
}

export function findMatchingUserId(userId, users) {
  const matchedUser = users.find((u) => u.id === userId);
  const user = matchedUser !== undefined ? matchedUser : null;

  return user;
}
