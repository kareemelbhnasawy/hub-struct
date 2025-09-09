import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ProfileScreen,
  MyProfileScreen,
  MyTeamScreen,
  KunyaCrudScreen,
  EditBackgroundScreen,
  SetPinScreen,
  ConfirmPinScreen,
  ProfileSettings,
  PersonDetails,
  BusinessDetails,
  QualificationDetailsScreen,
  QualificationsScreen,
  TeamMemberProfileScreen,
  ConvenantScreen
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
        animation: 'none',
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      <Stack.Screen name="MyTeam" component={MyTeamScreen} />
      <Stack.Screen name="PersonDetails" component={PersonDetails} />
      <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
      <Stack.Screen name="EditBackground" component={EditBackgroundScreen} />
      <Stack.Screen name="KunyaCrud" component={KunyaCrudScreen} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="Qualifications" component={QualificationsScreen} />
      <Stack.Screen name="SetPin" component={SetPinScreen} />
      <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
      <Stack.Screen name="QualificationDetails" component={QualificationDetailsScreen} />
      <Stack.Screen name="Convenant" component={ConvenantScreen} />
      <Stack.Screen
        name="TeamMemberProfile"
        component={TeamMemberProfileScreen}
      />
      <Stack.Screen
        name="QualificationDetails"
        component={QualificationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;