import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack, AppStack } from '@/navigation';
import { RootStackParamList } from '@/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{
          gestureEnabled: false,
          headerBackVisible: false,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="App"
        component={AppStack}
        options={{
          gestureEnabled: false,
          headerBackVisible: false,
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
