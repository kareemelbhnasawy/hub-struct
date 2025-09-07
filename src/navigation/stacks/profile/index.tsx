import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ProfileScreen,
  MyProfileScreen,
  KunyaCrudScreen,
  EditBackgroundScreen,
  SetPinScreen,
  ConfirmPinScreen,
  ProfileSettings,
  PersonDetails,
  BusinessDetails,
} from '@/screens';
import { ProfileStackParamList } from './types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      <Stack.Screen name="PersonDetails" component={PersonDetails} />
      <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
      <Stack.Screen name="EditBackground" component={EditBackgroundScreen} />
      <Stack.Screen name="KunyaCrud" component={KunyaCrudScreen} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="SetPin" component={SetPinScreen} />
      <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
