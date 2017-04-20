import {connect} from 'react-redux';
import Actions from './RegistrationActions';
import WelcomeSceneComponent from './WelcomeSceneComponent';

let mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({
  register: email => dispatch(Actions.registerEmail(email)),
  login: name => dispatch(Actions.handleLogin(name))

});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeSceneComponent);
