import {Platform, StyleSheet} from 'react-native';
import Colors from './Colors';

let Styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    ...Platform.select({
      ios: {
        backgroundColor: 'lightgrey'
      },
      android: {
        backgroundColor: 'white'
      }
    })
  },
  mainContent: {
    paddingHorizontal: 20,
    flex: 10,

  },
  LoginRegisterSwitch: {
    alignItems: 'center',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  LoginRegisterText: {
    fontSize: 20,
    padding: 10
  },
  headerContent: {
    backgroundColor: Colors.PRIMARY,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  headerLogo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',

  },
  headerLeft: {
    flex: 3,
  },
  headerCenter: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenterText: {
    fontSize: 20,
    color: Colors.TEXT
  },
  headerRight: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightText: {
    fontSize: 13,
    color: Colors.HEADLINE,
    textAlign: 'right'
  },
  checkBox: {
    paddingBottom: 15
  },
  footerContent: {}
  ,
  splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Styles;
