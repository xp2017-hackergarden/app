import {connect} from 'react-redux';
import Actions from './HomeActions';
import WelcomeSceneComponent from './HomeSceneComponent';

let mapStateToProps = state => ({
  email: state.getIn(['registration', 'email'])
});

let mapDispatchToProps = dispatch => ({
  unregister: () => dispatch(Actions.unregister())
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeSceneComponent);
