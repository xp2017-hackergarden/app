import React, {Component} from 'react';
import {Store, Persistor} from './AppState';
import AppNavigation from '../AppNavigation';
import {Provider} from 'react-redux';
import {AsyncStorage} from 'react-native';
import navigationActions from '../AppNavigation/AppNavigationActions';
import Constants from '../AppNavigation/AppNavigationConstants';

export default class App extends Component {
  componentWillMount() {
    AsyncStorage.getItem('authToken').then((value) => {
      if (value) {
        this.setState({
          authToken: value.authToken
        });
        Store.dispatch(navigationActions.jumpTo(Constants.HOME_SCENE));
      } else {
        Store.dispatch(navigationActions.jumpTo(Constants.REGISTRATION_SCENE));
      }
    });

  }

  async loadToken() {
    return await AsyncStorage.getItem('authToken');

  }

  render() {
    return (
      <Provider store={Store} persistor={Persistor}>
        <AppNavigation />
      </Provider>
    );
  }
}
