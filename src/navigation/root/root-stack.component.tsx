import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack, AppStack } from '@/navigation';
import { RootStackParamList } from '@/navigation/types';
import OtpConfirmationScreen from '@/components/templates/otp';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{
          gestureEnabled: false,
          headerBackVisible: false,
          headerLeft: () => null,
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
      <Stack.Screen
        name="OTP"
        component={OtpConfirmationScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
