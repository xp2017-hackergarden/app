import ActionTypes from './RegistrationActionTypes';
import HomeActionTypes from '../Home/HomeActionTypes';

let initialState = {};

export default function registration(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.STORE_EMAIL_TO_STATE:
      return { ...state, email: action.email };
    case ActionTypes.STORE_TOKEN_TO_STATE:
      return { ...state, authToken: action.authToken };
    case HomeActionTypes.REMOVE_AUTH_TOKEN_FROM_STATE:
      return { ...state, authToken: '' };
    default:
      return state;
  }
}
