import ActionTypes from './RegistrationActionTypes';
import * as axios from 'axios';
const API_PREFIX = 'http://localhost:8080/';
import navigationActions from '../AppNavigation/AppNavigationActions';

let Actions = {
  registerEmail: function(email){
    const that = this;
    return async function(dispatch){
      return await that.register(email, dispatch);
    };
  },
  register: function (email) {
    const that = this;
    const data = new FormData();
    data.append('email', email);

    return axios.post(API_PREFIX + 'url', data).then(
      function(response, dispatch){
        dispatch(that.storeEmailToState(email));
        return dispatch(navigationActions.jumpTo('homeScene'));

      }
    ).catch(function(error){
      console.log('Server call fail.');
      console.log(error.message);
      return 'Registration request failed';
    });
  },
  storeEmailToState: function(email) {
    return {
      type: ActionTypes.STORE_EMAIL_TO_STATE,
      email: email
    };
  },
  handleLogin:function(email, password){
    const that = this;
    return async function(dispatch, getState){
      let token = getState().registration.token;
      return await that.login(email, password, token);
    };
  },
  login: function(email, password, token){
    const that = this;
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    return axios.post(API_PREFIX + 'login', data, {
      headers: {
        'Authorization': 'Token ' + token
      }
    }).then(
      function (response, dispatch) {
        dispatch(navigationActions.jumpTo('homeScene'));
      }
    )
    
  }
};

export default Actions;
