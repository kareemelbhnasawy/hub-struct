import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SplashScreen } from './screens';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      //Todo: change back to Real Login Page Name
      initialRouteName="Splash"
      //Todo: add default animation when known from design
      //For now Global app stack options
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
