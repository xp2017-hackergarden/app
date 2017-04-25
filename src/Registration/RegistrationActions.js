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
        dispatch(that.storeEmailToState(email));
        ToastAndroid.showWithGravity('Email has been sent to ' + email + '.', ToastAndroid.SHORT, ToastAndroid.CENTER)
        return dispatch(navigationActions.jumpTo('registrationScene'));

      }
    ).catch(function(error){
      if(error.response.data.detail =='Email address already registered.'){
        ToastAndroid.showWithGravity(error.response.data.detail, ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
      return 'Server call failed';
    });
  },

  storeEmailToState: function(email) {
    return {
      type: ActionTypes.STORE_EMAIL_TO_STATE,
      email: email
    };
  },
  handleLogin:function(email, password, deviceToken){
    const that = this;
    return async function(dispatch){
      return await that.login(email, password, deviceToken, dispatch);
    };
  },
  login: function(email, password,deviceToken, dispatch){
    const that = this;
    const data = new FormData();
    data.append('username', email);
    data.append('password', password);
    data.append('fcm_registration_id', deviceToken)
    return axios.post(API_PREFIX + 'activate_mobile_app/', data
    ).then(
      function (response) {
        dispatch(that.storeTokenToState(response.data.response))
        dispatch(navigationActions.jumpTo('homeScene'));
      }
    ).catch(
      function(error){
        if(error && error.response.data.response === 'User does not exist'){
          ToastAndroid.showWithGravity('User does not exist', ToastAndroid.SHORT, ToastAndroid.CENTER);
        } else if(error && error.response.data.response === 'Wrong password') {
          ToastAndroid.showWithGravity('Wrong password', ToastAndroid.SHORT, ToastAndroid.CENTER);
        } else if(error && error.response.data.response === 'Could not save FCM token') {
          ToastAndroid.showWithGravity('Could not activate the app', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
      }
    );
    
  },
  storeTokenToState: function(token){
    return{
      type: ActionTypes.STORE_TOKEN_TO_STATE,
      registrationToken: token
    };
  },
};

export default Actions;
