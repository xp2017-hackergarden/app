import ActionTypes from './HomeActionTypes';
import navigationActions from '../AppNavigation/AppNavigationActions';
import Constants from '../AppNavigation/AppNavigationConstants';
import { AsyncStorage } from 'react-native';

let Actions = {
  logout: function() {
    const that = this;
    return async function(dispatch) {
      await AsyncStorage.removeItem('authToken');
      dispatch(that.removeTokenFromState());
      return dispatch(navigationActions.jumpTo(Constants.REGISTRATION_SCENE));
    };
  },
  removeTokenFromState: function() {
    return {
      type: ActionTypes.REMOVE_AUTH_TOKEN_FROM_STATE
    };
  }
};

export default Actions;
