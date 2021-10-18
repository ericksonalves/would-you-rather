import * as API from '../data/database';
import * as storageUtils from '../data/storage';
import { dictToList, findMatchingUserId } from '../utils/dataUtils';

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

      const userId = storageUtils.getUserId();
      const user = findMatchingUserId(userId, users);

      dispatch(receiveDataAction(users, user));
    });
  };
}
