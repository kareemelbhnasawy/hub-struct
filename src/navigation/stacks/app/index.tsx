import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProfileScreen } from './screens';
import { AppStackParamList } from './types';

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
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={
          {
            // Customize home screen options
          }
        }
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={
          {
            // Customize profile screen options
          }
        }
      />
      {/* Future app modules can be added here */}
    </Stack.Navigator>
  );
};

export default AppStack;
