import { FETCH_USER_LOGGEDIN,FETCH_USER_LOGGEDOUT } from './Type'
import { createStore, compose } from 'redux';
import Cookies from 'js-cookie';

const cookies = Cookies.get('Log');

const initialState = {
  logged: cookies ? true : false,
  cookies: cookies
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LOGGEDIN:
      return {
        ...state,
        logged: true,
        cookies: action.Log
      }
    case FETCH_USER_LOGGEDOUT:
      return {
        ...state,
        logged: false,
        cookies: Cookies.remove('Log')
      }
    default:
      return state
  }
}

let store = createStore(
  Reducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;