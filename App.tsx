/* eslint-disable */
import { Alert, I18nManager, StatusBar } from 'react-native';
import { getCrashlytics, log } from '@react-native-firebase/crashlytics';
import { useCallback, useEffect, useTransition } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { checkPermissions } from '@/utilities/permissions';
import { requestNotifications } from 'react-native-permissions';
import { PortalProvider } from '@gorhom/portal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ToastProvider } from '@/components/molecules';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTranslate } from '@/hooks';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  const crashlytics = getCrashlytics();
  const { locale, isRTL } = useTranslate();
  useEffect(() => {
    if (crashlytics) log(crashlytics, 'App mounted.');
    I18nManager.forceRTL(locale.includes('ar'));
    I18nManager.isRTL = locale.includes('ar');
    checkPermissions();
    requestNotifications();
  }, [crashlytics]);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log('foreground handler notifications: ', remoteMessage);
    });

    return unsubscribe;
  }, []);

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
          <SafeAreaProvider style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
            {/* Transparent status bar */}
            <StatusBar translucent backgroundColor="transparent" />
            <NavigationContainer
              onStateChange={handleNavigationStateChange}
              onReady={handleNavigationReady}>
              <ToastProvider>
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
