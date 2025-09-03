import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types';
import { QuickLoginScreen, HomeScreen } from '@/screens';
import ProfileStack from '../profile';
import PersonDetails from '@/screens/profile/person-details';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'default',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
      <Stack.Screen name="QuickLogin" component={QuickLoginScreen} />
      <Stack.Screen name="PersonDetails" component={PersonDetails} />
    </Stack.Navigator>
  );
};

export default AppStack;
