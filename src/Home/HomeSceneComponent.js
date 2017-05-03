import React, {Component} from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';
import {Styles as CommonStyles, Colors} from '../Common';
import Styles from './HomeSceneStyles';

class HomeSceneComponent extends Component {
  constructor(props) {
    super(props);

  }
  componentWillMount(){
    AsyncStorage.getItem('authToken').then((authToken) => {
      const token = JSON.parse(authToken);
      this.setState({
        authToken: token.value
      });
    }, (error) => {
      console.log(error, 'ERROR');
    });

  }
  async loadToken(){
    return await AsyncStorage.getItem('authToken');

  }
  render(){
    console.warn(this.state, 'STATE')
    return(
      <View style={CommonStyles.contentContainer}>
        <Text style={Styles.welcomeText}>Welcome, {this.props.email}!</Text>
        <Button
          onPress={this.props.unregister}
          title="Unregister"
          color={Colors.PRIMARY}
          accessibilityLabel="Press this button to unregister"
        />
      </View>
    );
  }
}

HomeSceneComponent.propTypes = {
  name: React.PropTypes.string,
  unregister: React.PropTypes.func.isRequired
};

export default HomeSceneComponent;
