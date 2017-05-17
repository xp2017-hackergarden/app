import navigationActions from '../AppNavigation/AppNavigationActions';
import Constants from '../AppNavigation/AppNavigationConstants';

let Actions = {
  logout: function (dispatch) {
    return dispatch(navigationActions.jumpTo(Constants.REGISTRATION_SCENE));
  }
}
export default Actions;
