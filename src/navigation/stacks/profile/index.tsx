import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ProfileScreen,
  MyProfileScreen,
  PersonDetailsScreen,
  KunyaCrudScreen,
  EditBackgroundScreen,
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
    </Stack.Navigator>
  );
};

export default ProfileStack;
