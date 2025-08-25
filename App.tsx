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
import { ToastProvider } from '@/components/molecules';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

  const queryClient = new QueryClient();

  const handleNavigationReady = useCallback(() => {
    if (crashlytics) {
      log(crashlytics, 'Navigation container ready');
    }
  }, [crashlytics]);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <PortalProvider>
          <SafeAreaProvider
            style={{ direction: I18nManager.isRTL ? 'rtl' : 'ltr' }}>
            <NavigationContainer
              onStateChange={handleNavigationStateChange}
              onReady={handleNavigationReady}>
              <ToastProvider>
                {/* Uncomment the line below to use the AppRoot for dev components */}
                {/* <AppRoot /> */}
                <RootStack />
              </ToastProvider>
            </NavigationContainer>
          </SafeAreaProvider>
        </PortalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default App;
