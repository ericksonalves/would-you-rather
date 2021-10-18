import * as storageUtils from '../data/storage';

export const SET_LOGGED_USER = 'SET_LOGGED_USER';

function setLoggedUserAction(user) {
  return {
    type: SET_LOGGED_USER,
    user,
  };
}

export function handleSetLoggedUser(user) {
  return (dispatch) => {
    dispatch(setLoggedUserAction(user));

    storageUtils.setUserId(user?.id);
  };
}
