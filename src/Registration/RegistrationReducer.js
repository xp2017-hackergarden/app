import ActionTypes from './RegistrationActionTypes';
import {ActionTypes as HomeActionTypes} from '../Home';

let initialState = {};

export default function registration(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REGISTER:
      return {...state, name: action.name};
    case HomeActionTypes.UNREGISTER:
      return {...state, name:''}
    case ActionTypes.STORE_EMAIL_TO_STATE:
      return {...state, email: action.email};
    case ActionTypes.STORE_TOKEN_TO_STATE:
      return {...state, registrationToken: action.token};
    default:
      return state;
  }
}
