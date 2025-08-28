/* eslint-disable */
import { View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';
import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import { useNavigation, useTranslate } from '@/hooks';
import { PinCode } from '@/components/molecules';
import { useCountdown } from '@/hooks/use-countdown';
import { styles } from './styles';
import { GlassContainer } from '@/components/atoms/glass-container';
import Logo from '@/components/molecules/logo';
import { useThemeStore } from '@/store/theme';
import { useStartFlow, useFinishFlow } from '@/network/hooks';
import { useState } from 'react';
import { getMMKVStorage } from '@/store/mmkv-storage';
import { useAuthStore } from '@/store/auth';

type Props = NativeStackScreenProps<RootStackParamList, 'OTP'>;

export default function OtpConfirmationScreen({ route }: Props) {
  const { replaceToScreen, resetToStack, goBack } = useNavigation();
  const mmkv = getMMKVStorage<string>();
  const { getThemedStyles } = useThemeStore();
  const { setLoginCredentials} = useAuthStore();
  const {
    nextScreen,
    nextScreenParams,
    mobile,
    resetAppNav,
    url,
    onConfirmOtp,
    body,
    expiresIn,
  } = route.params;
  const screenTestId = 'otp-screen';
  const lastDigits = mobile?.slice(-4) ?? '****';
  const navigateToNextScreen = () => {
    if (!nextScreen) return;
    if (resetAppNav) {
      resetToStack('App', 'Home');
    } else {
      replaceToScreen(nextScreen, nextScreenParams);
    }
  };
  const themedStyles = getThemedStyles(styles);
  const [error, setError] = useState<boolean | undefined>(undefined);

  const { isRTL } = useTranslate();

  const { formattedTime, isActive, reset } = useCountdown({
    initialSeconds: expiresIn || 120,
    onComplete: () => {
      // console.log('Timer completed');
    },
  });

  const { mutate: startFlow } = useStartFlow(url, () => {
    reset();
  });

  const { mutate: finishFlow } = useFinishFlow(
    url,
    (data) => {
      //save data
      setLoginCredentials({ email: body?.email, password: body?.password });

      onConfirmOtp?.(data);
      navigateToNextScreen();
    },
    (error) => {
      setError(true);
    },
  );

  const handleResendCode = () => {
    startFlow(body);
  };

  const handlePinComplete = (pin: string) => {
    finishFlow({
      otp: pin,
      deviceId: body?.deviceId,
    });
  };

  return (
    <View>
      {/* Your PinCode + Typography components here */}
      {/* {mobile && <Headline testId="" text={mobile} />} */}
      <Spacer space={50} />
      <View style={themedStyles.headerContainer}>
        {/* Todo: glass icon component and lucide icon rtl handler */}
        <GlassContainer testId="icon" containerStyle={{ aspectRatio: 1 }}>
          <LucideIcon
            name={isRTL ? 'ChevronRight' : 'ChevronLeft'}
            testId={''}
            onPress={() => goBack()}
          />
        </GlassContainer>
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
      <View style={themedStyles.pinCodeWrapper}>
        <PinCode
          onPinComplete={handlePinComplete}
          testId={screenTestId}
          errorProps={error ? { text: 'otp.invalidCode' } : undefined}
        />
      </View>
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