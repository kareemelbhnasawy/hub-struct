/* eslint-disable */
import { I18nManager } from 'react-native';
import { getCrashlytics, log } from '@react-native-firebase/crashlytics';
import { useCallback, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { checkPermissions } from '@/utilities/permissions';
import { requestNotifications } from 'react-native-permissions';
import AppRoot from '@/apps/app-root';
import { PortalProvider } from '@gorhom/portal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@/navigation';

const App = () => {
  const crashlytics = getCrashlytics();

  useEffect(() => {
    if (crashlytics) log(crashlytics, 'App mounted.');
    checkPermissions();
    requestNotifications();
  }, [crashlytics]);

  const handleNavigationStateChange = useCallback(
    (state: any) => {
      if (crashlytics) {
        const routeNames = state?.routes?.map((r: any) => r.name) || [];
        log(
          crashlytics,
          `Navigation state changed: ${JSON.stringify(routeNames)}`,
        );
      }
    },
    [crashlytics],
  );

  const handleNavigationReady = useCallback(() => {
    if (crashlytics) {
      log(crashlytics, 'Navigation container ready');
    }
  }, [crashlytics]);

  return (
    <GestureHandlerRootView>
      <PortalProvider>
        <SafeAreaProvider
          style={{ direction: I18nManager.isRTL ? 'rtl' : 'ltr' }}>
          <NavigationContainer
            onStateChange={handleNavigationStateChange}
            onReady={handleNavigationReady}>
            {/* Uncomment the line below to use the AppRoot for dev components */}
            {/* <AppRoot /> */}
            <RootStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
