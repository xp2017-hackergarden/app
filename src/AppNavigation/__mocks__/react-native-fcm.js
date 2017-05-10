const FCM = jest.genMockFromModule('react-native-fcm');

FCM.getFCMToken = () => Promise.resolve('a fcm token');

export default FCM;
