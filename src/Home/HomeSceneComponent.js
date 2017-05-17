import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {Styles as CommonStyles, Colors} from '../Common';
import styled from 'styled-components/native';

const WelcomeText = styled.Text`
    text-align: center;
    fontSize: 20;
    color: ${Colors.PRIMARY}
    `;


class HomeSceneComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email
    };
  }

  render() {
    return (
      <View style={CommonStyles.contentContainer}>
        <WelcomeText>Welcome!{this.props.email}</WelcomeText>
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
  email: React.PropTypes.string,
  unregister: React.PropTypes.func.isRequired
};

export default HomeSceneComponent;
