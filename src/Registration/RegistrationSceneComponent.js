import React, {Component} from 'react';
import {View, Text, Button, Image, Switch, TextInput, ToastAndroid} from 'react-native';
import {Colors, Styles as CommonStyles, Config} from '../Common';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FCM from 'react-native-fcm';

class RegistrationSceneComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: '',
      login: true,
      hidePassword: true,
      deviceToken: ''
    };
  }
  componentDidMount(){
    FCM.getFCMToken().then(token => {
      this.setState({
        deviceToken: token
      });
    });
  }
  _onRegister() {
    if(this.state.email) {
      this.setState({email: this.state.email.trim()});
    }
    if(this._validateEmail(this.state.email)){
      this.props.register(this.state.email);
    } else {
      this._nonValidEmail();
    }
    this.props.register(this.state.email);
  }

  _onLogin() {
    if(this.state.email) {
      this.setState({email: this.state.email.trim()});
    }
    if(this._validateEmail(this.state.email)){
      this.props.login(this.state.email, this.state.password, this.state.deviceToken);
    } else {
      this._nonValidEmail();
    }
  }

  _toggleHidePassword() {
    this.setState({
      hidePassword: !this.state.hidePassword
    });

  }
  _validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  _nonValidEmail(){
    ToastAndroid.showWithGravity('Enter valid email address', ToastAndroid.SHORT, ToastAndroid.CENTER);
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
          value={this.state.password}/>

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

RegistrationSceneComponent.propTypes = {
  email: React.PropTypes.string,
  register: React.PropTypes.func.isRequired,
  login: React.PropTypes.func.isRequired,
};

export default RegistrationSceneComponent;
