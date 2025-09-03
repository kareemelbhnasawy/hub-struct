import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ProfileScreen,
  MyProfileScreen,
  SetPinScreen,
  ConfirmPinScreen,
} from '@/screens';
import { ProfileStackParamList } from './types';
import PersonDetails from '@/screens/profile/person-details';
import ProfileSettings from '@/screens/profile/settings';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        animation: 'default',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      <Stack.Screen name="PersonDetails" component={PersonDetails} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="SetPin" component={SetPinScreen} />
      <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
