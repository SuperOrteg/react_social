import { FETCH_USER_LOGGEDIN,FETCH_USER_LOGGEDOUT } from './Type'

const fetchUserLoggedIn = () => {
    return {
      type: FETCH_USER_LOGGEDIN
    }
  }

const fetchUserLoggedOut = () => {
  return {
    type: FETCH_USER_LOGGEDOUT,
  };
};

export { fetchUserLoggedIn, fetchUserLoggedOut }