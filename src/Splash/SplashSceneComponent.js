import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Styles as CommonStyles} from '../Common';

class SplashSceneComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={CommonStyles.splash}>
        <Image
          source={require('../Resources/img/xp-logo.png')}
        />
      </View>
    );
  }
}


export default SplashSceneComponent;
