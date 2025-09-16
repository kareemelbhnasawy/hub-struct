import { View } from 'react-native';
import { SuccessScreenProps } from './interface';
import { Page } from '@/components/templates';
import { BaseButton } from '@/components/molecules';
import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';
import { styles } from './styles';

const SuccessScreen = ({
  iconProps,
  headlineProps = {
    text: 'forms.successScreen.requestSent',
  },
  requestNumber,
  paragraphProps,
  primaryButtonProps,
  secondaryButtonProps,
}: SuccessScreenProps) => {
  const screenTestId = 'success-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  return (
    <Page
      testId={screenTestId}
      hasHeader={false}
      disableSafeAreaTop={false}
      useInfoBackground>
      <View style={themedStyles.container}>
        {
          //TODO: Change Icon to Lottie View
        }
        <LucideIcon
          testId={`${screenTestId}-icon`}
          {...iconProps}
          color="foregroundQuinary"
        />
        <Spacer space={60} />
        <Headline
          testId={`${screenTestId}-headline`}
          size="lg"
          weight="Semibold"
          {...headlineProps}
          style={themedStyles.tealText}
        />
        <Spacer space={20} />

        {requestNumber && (
          <View style={themedStyles.buttonContainer}>
            <Headline
              text="forms.successScreen.requestNumber"
              size="2xs"
              weight="Regular"
              testId={`${screenTestId}-request-number-header`}
            />
            <Headline
              text={requestNumber}
              size="2xl"
              weight="Semibold"
              testId={`${screenTestId}-request-number`}
              style={themedStyles.tealText}
            />
          </View>
        )}
        {paragraphProps && (
          <>
            <Spacer space={20} />
            <Paragraph
              testId={`${screenTestId}-paragraph`}
              weight="Regular"
              size="xl"
              {...paragraphProps}
              style={themedStyles.paragraphText}
            />
          </>
        )}

        <View style={themedStyles.buttonContainer}>
          <Spacer space={30} />
          {primaryButtonProps && (
            <>
              <BaseButton
                testId={`${screenTestId}-primary-button`}
                variant="primary"
                size="lg"
                {...primaryButtonProps}
              />
            </>
          )}
          {secondaryButtonProps && (
            <>
              <Spacer space={10} />
              <BaseButton
                testId={`${screenTestId}-secondary-button`}
                variant="secondary"
                size="lg"
                {...secondaryButtonProps}
              />
            </>
          )}
        </View>
      </View>
    </Page>
  );
};

export default SuccessScreen;
