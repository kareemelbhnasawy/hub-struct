import { ActivityIndicator, View } from 'react-native';
import { useThemeStore } from '@/store/theme';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import splashBgAnimation from '@/assets/animations/splash-bg-animation.json';
import { BlurView } from '@react-native-community/blur';
import Logo from '@/components/molecules/logo';
import { useNavigation } from '@/hooks';
import { useEffect } from 'react';
import { setString, wait } from '@/utilities';
import useRefresh from '@/network/services/auth/refresh-token/refresh-token.hook';
import { clientSetToken } from '@/network/utilities';
import { STORAGE_KEYS } from '@/constants/storageKeys';

const SplashScreen = () => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const navigation = useNavigation();
  const testId = 'splash-login';

  const { isSuccess, isError, data, error } = useRefresh();

  useEffect(() => {
    if (isSuccess) {
      clientSetToken(data?.accessToken, false);
      setString(STORAGE_KEYS.REFRESH_TOKEN, data?.refreshToken);
      navigation.resetToStack('App', 'Home');
    }
  }, [isSuccess, data, navigation]);

  useEffect(() => {
    if (isError) {
      navigation.resetToStack('Auth', 'Login');
    }
  }, [isError, error, navigation]);

  const navigateToAuth = () => {
    // Navigation logic to Auth stack
    navigation.navigate('Login');
  };

  useEffect(() => {
    wait(4000).then(navigateToAuth);
  }, []);

  return (
    <View testID={`${testId}-wrapper`} style={themedStyles.wrapper}>
      <LottieView
        source={splashBgAnimation}
        autoPlay
        loop
        style={themedStyles.animationBG}
      />
      <BlurView
        testID={`${testId}-animation-blur`}
        style={themedStyles.absoluteFill}
        blurType="light"
        blurAmount={50}
      />

      <View style={themedStyles.contentWrapper}>
        <Logo testId={testId} size="lg" />

        <ActivityIndicator
          size={50}
          color={getThemeColor('activityIndicator')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
