import ActionTypes from './RegistrationActionTypes';

let initialState = {};

export default function registration(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.STORE_EMAIL_TO_STATE:
      return {...state, email: action.email};
    case ActionTypes.STORE_TOKEN_TO_STATE:
      return {...state, registrationToken: action.token};
    default:
      return state;
  }
}
