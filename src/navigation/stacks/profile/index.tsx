import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ProfileScreen,
  PersonalAccountScreen,
} from '@/screens';
import { ProfileStackParamList } from './types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="PersonalAccount" component={PersonalAccountScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
