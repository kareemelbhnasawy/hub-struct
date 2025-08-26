import { View, Text, Pressable } from 'react-native';
import { Headline, Paragraph } from '@/components/atoms';
import { useNavigation, useTranslate } from '@/hooks';
import styles from './styles';
import { useDeviceId } from '@/hooks/use-device-id';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { locale } = useTranslate();
  const { deviceId, isLoading } = useDeviceId();

  const handleNavigateToApp = () => {
    if (!deviceId || isLoading) return;

    navigation.navigateToOTP({
      nextScreen: 'Home',
      mobile: '01220293563',
      resetAppNav: true,
      url: 'auth/v1/login',
      body: {
        email: 'amr@hotmail.com',
        password: '12334',
        deviceId,
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onConfirmOtp: (responseFinish) => {
        //set tokens
      },
      expiresIn: 120,
    });
  };

  return (
    <View style={styles.container.base}>
      <Headline text="Login Screen" weight="Bold" testId="login-title" />
      <Paragraph text="Welcome to the login screen!" testId="login-subtitle" />

      <View style={styles.buttonContainer.base}>
        <Pressable style={styles.button.base} onPress={handleNavigateToApp}>
          <Text style={styles.buttonText.base}>Login & Go to App</Text>
        </Pressable>
      </View>

      <Text style={styles.localeText.base}>Current Language: {locale}</Text>
    </View>
  );
};

export default LoginScreen;
