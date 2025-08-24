/* eslint-disable */
import { useCallback } from 'react';
import { getCrashlytics, log } from '@react-native-firebase/crashlytics';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack, AppStack } from '@/navigation';
import { RootStackParamList } from '@/navigation/types';
import { Paragraph } from '@/components/atoms';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoot = () => {
  const crashlytics = getCrashlytics();

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
    <NavigationContainer
      onStateChange={handleNavigationStateChange}
      onReady={handleNavigationReady}>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          gestureEnabled: false, // Disable gesture back
        }}>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{
            gestureEnabled: false,
            headerBackVisible: false, // Hide back button in header
            headerLeft: () => null, // Remove back button completely
          }}
        />
        <Stack.Screen
          name="App"
          component={AppStack}
          options={{
            gestureEnabled: false,
            headerBackVisible: false,
            headerLeft: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoot;
