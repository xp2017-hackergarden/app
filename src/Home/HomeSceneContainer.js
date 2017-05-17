import {connect} from 'react-redux';
import Actions from './HomeActions';
import HomeSceneComponent from './HomeSceneComponent';

let mapStateToProps = state => ({
  email: state.registration.email
});

let mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Actions.logout)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSceneComponent);
