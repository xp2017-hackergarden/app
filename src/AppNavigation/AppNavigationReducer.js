import {NavigationExperimental} from 'react-native';
import ActionTypes from './AppNavigationActionTypes';
import Constants from './AppNavigationConstants';

let {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;


let initialState = {
  index: 0,
  routes: [
    {
      key: Constants.SPLASH_SCENE
    }
  ]
};

export default function appNavigation(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.JUMP_TO:
      return NavigationStateUtils.reset(state, [{key: action.key}], 0);
    default:
      return state;
  }
}
