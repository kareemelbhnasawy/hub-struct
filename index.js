import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { setString } from './src/utilities/storage.ts';
import messaging from '@react-native-firebase/messaging';
import { isIOS } from '@/utilities/is-os.ts';

if (__DEV__) {
  import('./ReactotronConfig.js').then(() =>
    console.log('Reactotron Configured'),
  );
}

// Register background handler for firebase messaging
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
  setString('FCM_NOTIFICATION', JSON.stringify(remoteMessage));
});

// Check if app was launched in the background and conditionally render null if so
function HeadlessCheck() {
  if (isIOS())
    messaging()
      .getIsHeadless()
      .then((isHeadless) => {
        // do sth with isHeadless
        if (isHeadless) {
          // App has been launched in the background by iOS, ignore
          return null;
        }

        // Render the app component on foreground launch
        return <App />;
      })
      .catch((error) => {
        console.error(
          ('ERROR ON FETCHING FIREBASE MESSAGING HEADLESS\nCheck firebase notifications/messaging configurations',
          error),
        );
        return <App />; // return App anyways to prevent notifications from crashing the whole app.
      });
  else return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
