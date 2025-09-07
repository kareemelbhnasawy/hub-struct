import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ProfileScreen,
  MyProfileScreen,
  PersonDetailsScreen,
  KunyaCrudScreen,
  EditBackgroundScreen,
  SetPinScreen,
  ConfirmPinScreen,
  ProfileSettingsScreen,
  QualificationDetailsScreen,
  QualificationsScreen,
} from '@/screens';
import { ProfileStackParamList } from './types';

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
      <Stack.Screen name="PersonDetails" component={PersonDetailsScreen} />
      <Stack.Screen name="EditBackground" component={EditBackgroundScreen} />
      <Stack.Screen name="KunyaCrud" component={KunyaCrudScreen} />
      <Stack.Screen name="Qualifications" component={QualificationsScreen} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
      <Stack.Screen name="SetPin" component={SetPinScreen} />
      <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
      <Stack.Screen name="QualificationDetails" component={QualificationDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
