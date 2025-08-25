import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      //Todo: change back to Real Login Page Name
      initialRouteName="Login"
      //Todo: add default animation when known from design
      //For now Global app stack options
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
