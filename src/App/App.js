import React, {Component} from 'react';
import {Store, Persistor} from './AppState';
import AppNavigation from '../AppNavigation';
import {Provider} from 'react-redux';
import {AsyncStorage} from 'react-native';


export default class App extends Component {
  componentWillMount(){
    AsyncStorage.getItem('registration').then((value) => {
      console.log(value, "VALUE")
      this.setState({
        authToken: JSON.parse(value.authToken)
      });
    }, (error) => {
      console.log(error, 'ERROR');
    });

  }
  async loadToken(){
    return await AsyncStorage.getItem('authToken');

  }
  render() {
    console.log(this.state, 'STATE');
    return (
      <Provider store={Store} persistor={Persistor}>
        <AppNavigation />
      </Provider>
    );
  }
}
