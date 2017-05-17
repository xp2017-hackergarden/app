import ActionTypes from './RegistrationActionTypes';

let initialState = {};

export default function registration(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REGISTER:
      console.log("Register action")
      return {...state, name: action.name};
    case ActionTypes.STORE_EMAIL_TO_STATE:
      console.log("Store email to state action")
      return {...state, email: action.email};
    case ActionTypes.STORE_TOKEN_TO_STATE:
      console.log("Store token to state action")
      return {...state, registrationToken: action.token};
    default:
      return state;
  }
}
