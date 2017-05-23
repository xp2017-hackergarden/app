import {connect} from 'react-redux';
import Actions from './RegistrationActions';
import RegistrationSceneComponent from './RegistrationSceneComponent';

let mapStateToProps = state => ({
  email: state.registration.email
});

let mapDispatchToProps = dispatch => ({
  register: email => dispatch(Actions.registerEmail(email)),
  login: (name, password, deviceToken) => dispatch(Actions.handleLogin(name, password, deviceToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationSceneComponent);
