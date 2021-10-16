import * as API from '../data/database';
import { dictToList } from '../utils/dataUtils';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveDataAction(users) {
  return {
    type: RECEIVE_DATA,
    users,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return API._getUsers().then((usersDict) => {
      const users = dictToList(usersDict);

      dispatch(receiveDataAction(users));
    });
  };
}
