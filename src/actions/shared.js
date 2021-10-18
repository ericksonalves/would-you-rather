import * as API from '../data/database';
import { dictToList } from '../utils/dataUtils';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveDataAction(users, user) {
  return {
    type: RECEIVE_DATA,
    users,
    user,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return API._getUsers().then((usersDict) => {
      const users = dictToList(usersDict);

      const userId = localStorage.getItem('userId');
      const matchedUser = users.find((u) => u.id === userId);
      const user = matchedUser !== undefined ? matchedUser : null;

      dispatch(receiveDataAction(users, user));
    });
  };
}
