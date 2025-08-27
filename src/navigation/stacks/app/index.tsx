import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProfileScreen } from './screens';
import { AppStackParamList } from './types';
import BiometricsScreen from '@/screens/profile/biometrics';
import SetPinScreen from '@/screens/profile/set-pin';
import ConfirmPinScreen from '@/screens/profile/confirm-pin';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // Global app stack options
        animation: 'slide_from_right',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Biometrics" component={BiometricsScreen} />
      <Stack.Screen name="SetPin" component={SetPinScreen} />
      <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />

      {/* Future app modules can be added here */}
    </Stack.Navigator>
  );
};

export default AppStack;
