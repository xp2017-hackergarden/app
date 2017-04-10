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
  headerContent: {
    backgroundColor: Colors.PRIMARY,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLogo: {
    flex: 2,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  headerCenter: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenterText:{
    fontSize: 30,
    color: Colors.TEXT
  },
  headerRight: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
