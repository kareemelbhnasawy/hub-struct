/* eslint-disable */
import { I18nManager } from 'react-native';
import { getCrashlytics, log } from '@react-native-firebase/crashlytics';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { checkPermissions } from '@/utilities/permissions';
import { requestNotifications } from 'react-native-permissions';
import AppRoot from '@/apps/app-root';
import { PortalProvider } from '@gorhom/portal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const crashlytics = getCrashlytics();

  useEffect(() => {
    if (crashlytics) log(crashlytics, 'App mounted.');
    checkPermissions();

    requestNotifications();
  }, [crashlytics]);

  return (
    <GestureHandlerRootView>
      <PortalProvider>
        <SafeAreaProvider
          style={{ direction: I18nManager.isRTL ? 'rtl' : 'ltr' }}>
          <AppRoot />
        </SafeAreaProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
