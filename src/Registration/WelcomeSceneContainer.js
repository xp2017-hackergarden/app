import {connect} from 'react-redux';
import Actions from './RegistrationActions';
import WelcomeSceneComponent from './WelcomeSceneComponent';

let mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({
  register: name => dispatch(Actions.register(name)),
  login: name => dispatch(Actions.register(name))

});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeSceneComponent);
