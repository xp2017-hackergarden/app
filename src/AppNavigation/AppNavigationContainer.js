import {connect} from 'react-redux';
import AppNavigationComponent from './AppNavigationComponent';

let mapStateToProps = state => ({
  navigationState: state.appNavigation
});

export {mapStateToProps};
export default connect(mapStateToProps)(AppNavigationComponent);
