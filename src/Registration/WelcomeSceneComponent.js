import React, {Component} from 'react';
import {View, Text, Button, Image, Switch, TextInput} from 'react-native';
import {Colors, Styles as CommonStyles, Config} from '../Common';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class WelcomeSceneComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      login: true,
      hidePassword: true,
    };
  }

  _onRegister() {
    this.props.register(this.state.email);
  }

  _onLogin() {
    this.props.login(this.state.email, this.state.password);
  }

  _toggleHidePassword() {
    this.setState({
      hidePassword: !this.state.hidePassword
    });

  }

  render() {
    let versionNumber = Config.VERSION;

    const emailInput =
      <TextInput
        placeholder="Email"
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}/>;

    let loginOrRegister = this.state.login ?
      <View>

        { emailInput }

        <TextInput
          placeholder="Password"
          secureTextEntry={this.state.hidePassword}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}></TextInput>

        <CheckBox
          style={CommonStyles.checkBox}
          onClick={() => this._toggleHidePassword()}
          isChecked={!this.state.hidePassword}
          rightText="show password"
          checkedImage={<Icon name="checkbox-marked" size={30} color={Colors.PRIMARY}/>}
          unCheckedImage={<Icon name="checkbox-blank-outline" size={30} color={Colors.PRIMARY}/>}
        />

        <Button
          onPress={this._onLogin.bind(this)}
          title="Login"
          color={Colors.PRIMARY}
          accessibilityLabel="Press this button to Login"
        />
      </View>
      :
      <View>

        { emailInput }

        <Button
          onPress={this._onRegister.bind(this)}
          title="Register"
          color={Colors.PRIMARY}
          accessibilityLabel="Press this button to Register"
        />
      </View>;

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

          <View style={CommonStyles.LoginRegisterSwitch}>
            <Text style={CommonStyles.LoginRegisterText}>Login</Text>
            <Switch
              onTintColor="gray"
              thumbTintColor={Colors.PRIMARY}
              tintColor="gray"
              onValueChange={(value) => this.setState({login: !value})}
              value={!this.state.login}/>
            <Text style={CommonStyles.LoginRegisterText}>Register</Text>
          </View>

          <View>
            {loginOrRegister}
          </View>

        </View>
        <View style={CommonStyles.footerContent}>
          <Text>Version: {versionNumber}</Text>
        </View>
      </View>
    );
  }
}

WelcomeSceneComponent.propTypes = {};

export default WelcomeSceneComponent;
