import { ActivityIndicator, View } from 'react-native';
import { useThemeStore } from '@/store/theme';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import splashBgAnimation from '@/assets/animations/splash-bg-animation.json';
import { BlurView } from '@react-native-community/blur';
import Logo from '@/components/molecules/logo';
import { useNavigation } from '@/hooks';
import { useEffect, useState } from 'react';
import { getString, setString, wait } from '@/utilities';
import useRefresh from '@/network/services/auth/refresh-token/refresh-token.hook';
import { clientSetToken } from '@/network/utilities';
import { STORAGE_KEYS } from '@/constants/storageKeys';

const SplashScreen = () => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const navigation = useNavigation();
  const testId = 'splash-login';
  const refreshToken = getString(STORAGE_KEYS.REFRESH_TOKEN);
  const [enabled, setEnabled] = useState<boolean>(false);

  const { isSuccess, isError, data, isLoading } = useRefresh(enabled);

  const navigateToAuth = () => {
    if (!isLoading)
      if (isSuccess) {
        // Navigation logic to Auth stack
        clientSetToken(data?.accessToken, false);
        setString(STORAGE_KEYS.REFRESH_TOKEN, data?.refreshToken);
        navigation.resetToStack('App', 'Home');
      } else {
        navigation.resetToStack('Auth', 'Login', { enableQuickLogin: true });
      }
  };

  useEffect(() => {
    if (refreshToken) {
      setEnabled(true);
    }
    wait(4000).then(navigateToAuth);
  }, [isError, isSuccess, navigation]);

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
