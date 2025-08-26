import { Headline, Spacer } from '@/components/atoms';
import FormInputTypes from '@/components/templates/form/constants';
import Logo from '@/components/molecules/logo';
import { Form, Page } from '@/components/templates';
import { styles } from './styles';
import { useThemeStore } from '@/store/theme';
import { useNavigation } from '@/hooks';
import useLoginStart from '@/network/services/auth/login-start/login-start.hook';
import { FormikValues } from 'formik';
import { getMMKVStorage } from '@/store/mmkv-storage';
import { useEffect, useState } from 'react';
import { ToastService } from '@/components/molecules';
import { LoginStartResponse } from '@/network/services/auth/types';

const LoginScreen = () => {
  const navigation = useNavigation();
  const screenTestId = 'login-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const mmkv = getMMKVStorage<string>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [deviceId, setDeviceId] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [expiresIn, setExpiresIn] = useState<string>('');
  const [loginCount, setLoginCount] = useState<number>(0);
  const [isAccountSuspended, setIsAccountSuspended] = useState<boolean>(false);

  const handleNavigateToApp = () => {
    navigation.navigateToOTP({
      nextScreen: 'Home',
      mobile: mobile,
      resetAppNav: true,
      url: 'auth/v1/login',
      body: {
        email: email,
        password: password,
        deviceId: deviceId,
      },
      onConfirmOtp: (responseFinish) => {
        clientSetToken(responseFinish?.accessToken, false);
        //set tokens
      },
      expiresIn: expiresIn,
    });
  };

  const onLoginSuccess = (data: LoginStartResponse) => {
    if (isAccountSuspended) {
      onLoginError();
      return;
    }
    setExpiresIn(data.expiresIn);
    setMobile(data.mobileNumber);
    mmkv.setItem('email', { state: email, version: Date.now() });
    mmkv.setItem('password', { state: password, version: Date.now() });

    handleNavigateToApp();
  };

  const onLoginError = () => {
    const newLoginCount = loginCount + 1;
    const loginCountAsString = isAccountSuspended
      ? '3'
      : newLoginCount.toString();
    const errorMessage = isAccountSuspended
      ? 'auth.accountSuspended'
      : 'auth.invalidData';

    setLoginCount(newLoginCount);
    ToastService.error({
      props: {
        messageProps: {
          text: errorMessage,
          textProps: { trialNumber: loginCountAsString },
        },
        testId: '',
      },
      duration: 4000,
    });
    mmkv.setItem('loginCount', { state: loginCountAsString });
  };

  const { mutate: login } = useLoginStart(onLoginSuccess, onLoginError);

  const onSubmit = (values: FormikValues) => {
    setEmail(values.mail);
    setPassword(values.password);
    setLoginCount(loginCount + 1);

    const loginRequest = {
      email: values.mail,
      password: values.password,
      deviceId: 'some-device-id', // Replace with actual deviceId logic if needed
    };

    login(loginRequest);
  };

  useEffect(() => {
    if (loginCount >= 3) {
      setIsAccountSuspended(true);
    }
  }, [loginCount]);

  return (
    <Page testId={screenTestId} hasHeader={false}>
      <Spacer space={50} />
      <Logo testId={screenTestId} size="md" />
      <Spacer space={20} />
      <Headline
        testId={`${screenTestId}-title`}
        text="auth.login"
        size="lg"
        weight="Semibold"
        style={themedStyles.defaultText}
      />
      <Headline
        testId={`${screenTestId}-subtitle`}
        text="auth.description"
        size="xs"
        weight="Medium"
        style={themedStyles.defaultText}
      />
      <Spacer space={40} />
      <Form
        testId={screenTestId}
        onSubmit={onSubmit}
        fields={[
          {
            name: 'mail',
            type: FormInputTypes.TextInput,
            placeholder: 'auth.email-prompt',
            labelProps: { text: 'auth.email' },
            validation: { required: true },
          },
          {
            name: 'password',
            type: FormInputTypes.PasswordInput,
            placeholder: 'auth.password-prompt',
            labelProps: { text: 'auth.password' },
            validation: { required: true },
          },
        ]}
      />
    </Page>
  );
};

export default LoginScreen;
