import { View } from 'react-native';
import { useThemeStore } from '@/store/theme';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import splashBgAnimation from '@/assets/animations/splash-bg-animation.json';
import { BlurView } from '@react-native-community/blur';
import Logo from '@/components/molecules/logo';
import { Page } from '@/components/templates';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { Headline, Paragraph, Spacer } from '@/components/atoms';
import { BaseButton } from '@/components/molecules';
import { useProfileStore } from '@/store/profile';

const DigitalCardScreen = () => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const testId = 'digital-card-screen';
  const { jobTitle, name } = useProfileStore();

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <Page
      testId={`${testId}`}
      pageHeaderVariant={PageHeaderVariants.BackWithTitle}
      pageHeaderProps={{
        titleProps: { text: 'بطاقتي الرقمية' },
        isTitleCentered: true,
      }}>
      <Spacer space={16} />
      <View style={themedStyles.cardContainer}>
        <View testID={`${testId}-wrapper`} style={themedStyles.wrapper}>
          <LottieView
            source={splashBgAnimation}
            autoPlay={false}
            loop={false}
            resizeMode="cover"
            style={themedStyles.absoluteFill}
          />
          <BlurView
            testID={`${testId}-animation-blur`}
            style={themedStyles.absoluteFill}
            blurType="light"
            blurAmount={50}
          />

          <View style={themedStyles.contentWrapper}>
            <Headline
              text={name}
              isTranslated={false}
              size="md"
              weight="Semibold"
              testId={`${testId}-name`}
            />
            <Headline
              text={jobTitle}
              isTranslated={false}
              testId={`${testId}-job-title`}
              size="xs"
              weight="Medium"
            />
            <Spacer space={24} />
            <Logo testId={`${testId}-logo`} size="md" />
            <Spacer space={24} />
          </View>
        </View>
      </View>
      <Spacer space={7} />
      <Paragraph
        text={'profile.digitalCardDetails.animation'}
        testId={`${testId}-animation`}
        size="xl"
        weight="Medium"
        style={themedStyles.iconAnimationText}
      />
      <Spacer space={7} />
      <BaseButton
        variant="secondary"
        textProps={{ text: 'profile.digitalCardDetails.share' }}
        size="lg"
        testId={`${testId}-share`}
        leftIcon={{ name: 'QrCode' }}
      />
      <Spacer space={7} />
    </Page>
  );
};

export default DigitalCardScreen;
