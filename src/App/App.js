import React, {Component} from 'react';
import {Store, Persistor} from './AppState';
import AppNavigation from '../AppNavigation';
import {Provider} from 'react-redux';
import {AsyncStorage} from 'react-native';
import navigationActions from '../AppNavigation/AppNavigationActions';
import Constants from '../AppNavigation/AppNavigationConstants';

export default class App extends Component {
  componentWillMount() {
    AsyncStorage.getItem('registration').then((value) => {
      if (value) {
        console.log('got the token!')
        this.setState({
          authToken: JSON.parse(value.authToken)
        });
        // jump to home page!
        Store.dispatch(navigationActions.jumpTo(Constants.HOME_SCENE));

      } else {
        // jump to login
        console.log("do this!")
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
