import React, {Component} from 'react';
import {Store, Persistor} from './AppState';
import AppNavigation from '../AppNavigation';
import {Provider} from 'react-redux';
import {AsyncStorage} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <Provider store={Store} persistor={Persistor}>
        <AppNavigation />
      </Provider>
    );
  }
}
