import React, {Component} from 'react';
import {View, Text, TextInput, Button, Image} from 'react-native';
import {Colors, Styles as CommonStyles, Config} from '../Common';
import Styles from './WelcomeSceneStyles';

class WelcomeSceneComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  _onRegister() {
    this.props.register(this.state.name);
  }

  render() {
    let versionNumber = Config.VERSION;
    return (
      <View style={CommonStyles.contentContainer}>

        <View style={CommonStyles.headerContent}>

          <View style={CommonStyles.headerLeft}>
            <Image
              style={CommonStyles.headerLogo}
              source={require('../Resources/img/xp-logo.png')}
            />
          </View>

          <View style={CommonStyles.headerCenter}>
            <Text style={CommonStyles.headerCenterText}>Welcome to xp 2017</Text>
          </View>

          <View style={CommonStyles.headerRight}>
            <Text style={CommonStyles.headerRightText}>May{'\n'}22-26{'\n'}2017</Text>
          </View>
        </View>

        <View style={CommonStyles.mainContent}>

          <Text style={Styles.registrationPrompt}>Please enter your name:</Text>
          <TextInput
            style={Styles.registrationInput}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
          <Button
            onPress={this._onRegister.bind(this)}
            title="Register"
            color={Colors.PRIMARY}
            accessibilityLabel="Press this button to register"
          />

        </View>
        <View style={CommonStyles.footerContent}>
          <Text>Version: {versionNumber}</Text>
        </View>
      </View>
    );
  }
}

WelcomeSceneComponent.propTypes = {
  register: React.PropTypes.func.isRequired
};

export default WelcomeSceneComponent;
