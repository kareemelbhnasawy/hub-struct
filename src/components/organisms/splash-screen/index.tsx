import { ActivityIndicator, View } from 'react-native';
import { useThemeStore } from '@/store/theme';
import { styles } from './styles';
import { SplashScreenProps } from './interface';
import LottieView from 'lottie-react-native';
import splashBgAnimation from '@/assets/animations/splash-bg-animation.json';
import { BaseImage } from '@/components/atoms';
import { BlurView } from '@react-native-community/blur';
import { scale } from 'react-native-size-matters';

const SplashScreen = ({ testId }: SplashScreenProps) => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  return (
    <View testID={`${testId}-splash-wrapper`} style={themedStyles.wrapper}>
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
        blurAmount={50}/>

      <View style={themedStyles.contentWrapper}>
        <BaseImage
          testId={`${testId}-Logo`}
          resizeMode="cover"
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          image={require('@/assets/images/HRSD-Logo.png')}
          width={scale(100)}
          height={scale(80)}
        />

        <ActivityIndicator
          size={50}
          color={getThemeColor('activityIndicator')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
