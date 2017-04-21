import ActionTypes from './RegistrationActionTypes';
import * as axios from 'axios';
const API_PREFIX = 'https://cclz-xpserver.herokuapp.com/api/';
import navigationActions from '../AppNavigation/AppNavigationActions';
import {ToastAndroid} from 'react-native';

let Actions = {
  registerEmail: function(email){
    const that = this;
    return async function(dispatch){
      return await that.register(email, dispatch);
    };
  },
  register: function (email, dispatch) {
    const that = this;
    const data = new FormData();
    data.append('email', email);

    return axios.post(API_PREFIX + 'users/', data).then(
      function(response){
        console.log(response, 'Response')
        dispatch(that.storeEmailToState(email));
        return dispatch(navigationActions.jumpTo('homeScene'));

      }
    ).catch(function(error){
      if(error.response.data.detail =='Email address already registered.'){
        ToastAndroid.showWithGravity(error.response.data.detail, ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
      console.log('Server call fail.');
      console.log(error);
      console.log(error.response.data.detail, 'ERROR')
      return 'Server call failed';
    });
  },
  storeEmailError:function (errorData) {
    return{
      type: ActionTypes.STORE_EMAIL_ERROR,
      errorData: errorData
    }

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
  login: function(email, password){
    const that = this;
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    return axios.post(API_PREFIX + 'users', data
    ).then(
      function (response, dispatch) {
        dispatch(navigationActions.jumpTo('homeScene'));
      }
    );
    
  },
  storeTokenTostate: function(token){
    return{
      type: ActionTypes.STORE_TOKEN_TO_STATE,
      token: token
    };
  }
};

export default Actions;
