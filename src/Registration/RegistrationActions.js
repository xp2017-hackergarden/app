import ActionTypes from './RegistrationActionTypes';
import * as axios from 'axios';
import navigationActions from '../AppNavigation/AppNavigationActions';
import {ToastAndroid, AsyncStorage} from 'react-native';
import {Config} from '../Common';
import Constants from '../AppNavigation/AppNavigationConstants';
import querystring from 'querystring';

let Actions = {
  registerEmail: function (email) {
    const that = this;
    return async function (dispatch) {
      return await that.register(email, dispatch);
    };
  },
  register: function (email, dispatch) {
    const that = this;

    return axios.post(Config.API_PREFIX + 'users/',
      querystring.stringify({ 'email': email }))
      .then(
      response => {
        dispatch(that.storeEmailToState(email));
        ToastAndroid.showWithGravity('Email has been sent to ' + email + '.', ToastAndroid.SHORT, ToastAndroid.CENTER)
      }).catch(
        error => {
          if (error.response.data.detail === 'Email address already registered.') {
            ToastAndroid.showWithGravity(error.response.data.detail, ToastAndroid.SHORT, ToastAndroid.CENTER);
          }
        });
  },

  storeEmailToState: function (email) {
    return {
      type: ActionTypes.STORE_EMAIL_TO_STATE,
      email: email
    };
  },
  handleLogin: function (email, password, deviceToken) {
    const that = this;
    return async function (dispatch) {
      return await that.login(email, password, deviceToken, dispatch);
    };
  },
  login: function (email, password, deviceToken, dispatch) {
    const that = this;
    return axios.post(Config.API_PREFIX + 'activate-mobile-app/',
      querystring.stringify({ username: email, password: password, fcm_registration_id: deviceToken }),
    ).then(
      response => {
        dispatch(that.storeTokenToState(response.data.response));
        that.storeTokenToStorage(response.data.response);
        dispatch(that.storeEmailToState(email));
        dispatch(navigationActions.jumpTo(Constants.HOME_SCENE));
      }
    ).catch(
      error => {
        if (error && !error.response) {
          ToastAndroid.showWithGravity('Network error', ToastAndroid.SHORT, ToastAndroid.CENTER);
        } else {
          ToastAndroid.showWithGravity(error.response.data.response, ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
      }
    );
  },
  storeTokenToState: function (token) {
    return {
      type: ActionTypes.STORE_TOKEN_TO_STATE,
      authToken: token
    };
  },
  storeTokenToStorage: function (token) {
    return AsyncStorage.setItem('authToken', JSON.stringify({
      value: token
    }));
  }
};

export default Actions;
