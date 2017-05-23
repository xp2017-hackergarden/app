import navigationActions from '../AppNavigation/AppNavigationActions';
import Constants from '../AppNavigation/AppNavigationConstants';
import {AsyncStorage} from 'react-native';

let Actions = {
  logout: function () {
    return async function (dispatch) {
      await AsyncStorage.removeItem('authToken');
      return dispatch(navigationActions.jumpTo(Constants.REGISTRATION_SCENE));
    };
  }
}

export default Actions;
