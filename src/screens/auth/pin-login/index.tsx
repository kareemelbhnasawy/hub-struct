import { Headline, Paragraph, Spacer } from '@/components/atoms';
import Logo from '@/components/molecules/logo';
import { Page } from '@/components/templates';
import { styles } from './styles';
import { useThemeStore } from '@/store/theme';
import { useNavigation } from '@/hooks';
import { BaseButton, PinCode } from '@/components/molecules';
import { clientSetToken } from '@/network/utilities';
import useLoginPin from '@/network/services/auth/login-pin/login-pin.hook';
import { useAuthStore } from '@/store/auth';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { setString } from '@/utilities';
import { useState } from 'react';
import { useProfileStore } from '@/store/profile';

const PinLoginScreen = () => {
  const navigation = useNavigation();
  const screenTestId = 'pin-login-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const { email } = useAuthStore();
  const { kunya, name } = useProfileStore();
  const [error, setError] = useState(false);
  const onSuccessPinLogin = (data) => {
    clientSetToken(data?.accessToken, false);
    setString(STORAGE_KEYS.REFRESH_TOKEN, data?.refreshToken);
    navigation.resetToStack('App', 'Home');
  };

  const onErrorPinLogin = () => {
    setError(true);
  };

  const { mutate, isPending } = useLoginPin(onSuccessPinLogin, onErrorPinLogin);

  return (
    <Page testId={screenTestId} hasHeader={false} isLoading={isPending}>
      <Spacer space={50} />
      <Logo testId={screenTestId} size="md" />
      <Spacer space={20} />
      <Paragraph testId={screenTestId} weight="Medium" text="auth.hello" />
      <Headline
        testId={`${screenTestId}-title`}
        text={kunya || name}
        isTranslated={false}
        size="xs"
        weight="Bold"
        style={themedStyles.defaultText}
      />
      <Spacer />

      <Headline
        testId={`${screenTestId}-subtitle`}
        text="auth.enter-pin"
        size="xs"
        weight="Medium"
        style={themedStyles.defaultText}
      />
      <Spacer space={30} />
      <PinCode
        secureTextEntry
        testId={screenTestId}
        onPinComplete={(pinCode) => mutate({ email, pinCode })}
        errorProps={error ? { text: 'otp.invalidCode' } : undefined}
      />
      <Spacer isOrDivider spaceBottom={30} spaceTop={60} />
      <BaseButton
        testId={screenTestId}
        size="lg"
        variant="secondary"
        onPress={() => navigation.goBack()}
        textProps={{ text: 'auth.login-with-email' }}
      />
    </Page>
  );
};

export default PinLoginScreen;
