export function dictToList(dict) {
  return Object.keys(dict).map(function (key) {
    return dict[key];
  });
}
