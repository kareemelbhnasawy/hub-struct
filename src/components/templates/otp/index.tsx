import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';
import { Headline, Paragraph, Spacer } from '@/components/atoms';
import { useNavigation } from '@/hooks';
import { GlassIcon, PinCode } from '@/components/molecules';
import { useCountdown } from '@/hooks/use-countdown';
import { styles } from './styles';
import Logo from '@/components/molecules/logo';
import { useThemeStore } from '@/store/theme';
import { useStartFlow, useFinishFlow } from '@/network/hooks';
import { useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'OTP'>;

export default function OtpConfirmationScreen({ route }: Props) {
  const { replaceToScreen, resetToStack, goBack } = useNavigation();
  const { getThemedStyles } = useThemeStore();
  const {
    nextScreen,
    nextScreenParams,
    mobile,
    resetAppNav,
    url,
    onConfirmOtp,
    body,
    expiresIn,
    config,
    isBack,
  } = route.params;
  const screenTestId = 'otp-screen';
  const lastDigits = mobile?.slice(-4) ?? '****';
  const navigateToNextScreen = () => {
    if (isBack) {
      goBack();
      return;
    }
    if (!nextScreen) return;
    if (resetAppNav) {
      resetToStack('App', 'Home');
    } else {
      replaceToScreen(nextScreen, nextScreenParams);
    }
  };
  const themedStyles = getThemedStyles(styles);
  const [error, setError] = useState<boolean | undefined>(undefined);

  const { formattedTime, isActive, reset } = useCountdown({
    initialSeconds: expiresIn || 120,
    onComplete: () => {
      // console.log('Timer completed');
    },
  });

  const { mutate: startFlow } = useStartFlow(url, () => {
    reset();
  });

  const { mutate: finishFlow } = useFinishFlow({
    url,
    onSuccess: (data) => {
      //save data
      onConfirmOtp?.(data);
      navigateToNextScreen();
    },
    onError: () => {
      setError(true);
    },
    config,
  });

  const handleResendCode = () => {
    startFlow(body);
  };

  const handlePinComplete = (pin: string) => {
    finishFlow({
      otp: pin,
      deviceId: body?.deviceId,
    });
  };

  const handlePinTyping = () => {
    if (error) setError(undefined);
  };

  return (
    <View>
      {/* Your PinCode + Typography components here */}
      {/* {mobile && <Headline testId="" text={mobile} />} */}
      <Spacer space={50} />
      <View style={themedStyles.headerContainer}>
        {/* Todo: glass icon component and lucide icon rtl handler */}
        <GlassIcon
          testId={screenTestId}
          name="ChevronLeft"
          isRTLMirrored
          onPress={() => goBack()}
        />
        <Logo testId={screenTestId} size="md" />
      </View>
      <Spacer space={20} />
      <Headline
        testId={`${screenTestId}-title`}
        text="otp.verify"
        size="lg"
        weight="Semibold"
        //todo: add color
        style={themedStyles.defaultText}
      />
      <Headline
        testId={`${screenTestId}-subtitle`}
        text="otp.sentOTP"
        textProps={{ phoneNumber: lastDigits }}
        size="xs"
        weight="Medium"
        style={themedStyles.subText}
      />
      <Spacer space={84} />
      <PinCode
        onPinComplete={handlePinComplete}
        testId={screenTestId}
        errorProps={error ? { text: 'otp.invalidCode' } : undefined}
        onTyping={handlePinTyping}
        containerStyle={themedStyles.pinCodeWrapper}
      />
      <Headline
        testId={`${screenTestId}-timer`}
        text={formattedTime}
        size="2xl"
        weight="Medium"
        style={themedStyles.timer}
      />
      {!isActive && (
        <View style={themedStyles.resendContainer}>
          <Paragraph
            text="otp.didNotReceive"
            testId={`${screenTestId}-did-not-receive-text`}
            size="lg"
            style={themedStyles.defaultTextColor}
          />
          <Paragraph
            testId={`${screenTestId}-resend`}
            text="otp.resendCode"
            onPress={handleResendCode}
            style={themedStyles.resendButton}
            weight="Medium"
            size="lg"
          />
        </View>
      )}
    </View>
  );
}
