import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types';
import {
  QuickLoginScreen,
  ConfirmPinScreen,
  HomeScreen,
  SetPinScreen,
} from '@/screens';
import ProfileStack from '../profile';
import PersonDetails from '@/screens/profile/person-details';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileStack} />
      <Stack.Screen name="QuickLogin" component={QuickLoginScreen} />
      <Stack.Screen name="SetPin" component={SetPinScreen} />
      <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
      <Stack.Screen name="PersonDetails" component={PersonDetails} />
    </Stack.Navigator>
  );
};

export default AppStack;