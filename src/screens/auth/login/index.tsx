import { Headline, Spacer } from '@/components/atoms';
import FormInputTypes from '@/components/templates/form/constants';
import Logo from '@/components/molecules/logo';
import { Form, Page } from '@/components/templates';
import { styles } from './styles';
import { useThemeStore } from '@/store/theme';
import { useNavigation } from '@/hooks';
import useLoginStart from '@/network/services/auth/login-start/login-start.hook';
import { FormikValues } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { BaseButton, ToastService } from '@/components/molecules';
import { useDeviceId } from '@/hooks/use-device-id';
import { clientSetToken } from '@/network/utilities';
import useGenerateChallenge from '@/network/services/auth/generate-challenge/generate-challenge.hook';
import useLoginBio from '@/network/services/auth/login-bio/login-bio.hook';
import { createBioSignature } from '@/utilities/biometrics';
import { useAuthStore } from '@/store/auth';
import { setString } from '@/utilities';
import { STORAGE_KEYS } from '@/constants/storageKeys';

const LoginScreen = () => {
  const navigation = useNavigation<'Login'>();
  const screenTestId = 'login-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { deviceId, isLoading } = useDeviceId();
  const [loginCount, setLoginCount] = useState<number>(0);
  const [isAccountSuspended, setIsAccountSuspended] = useState<boolean>(false);
  const {
    email: savedMail,
    password: savedPassword,
    quickLoginType,
    setLoginCredentials,
  } = useAuthStore();

  const onSuccessBioLogin = (data) => {
    clientSetToken(data?.accessToken, false);
    setString(STORAGE_KEYS.REFRESH_TOKEN, data?.refreshToken);
    navigation.resetToStack('App', 'Home');
  };

  const { mutate: mutateLoginBio, isPending: isPendingLoginBio } =
    useLoginBio(onSuccessBioLogin);

  const onSuccessChallenge = (data) => {
    createBioSignature(data?.challenge).then((resultObject) => {
      const { success, signature } = resultObject;

      if (success) {
        mutateLoginBio({ email: savedMail, signature });
      }
    });
  };
  const { mutate: mutateChallenge, isPending: isPendingChallenge } =
    useGenerateChallenge(onSuccessChallenge);

  useEffect(() => {
    if (quickLoginType && navigation?.params?.enableQuickLogin) {
      onPressQuickLogin();
    }
  }, []);

  const handleNavigateToApp = (res: unknown) => {
    if (!deviceId || isLoading) return;
    navigation.navigateToOTP({
      nextScreen: 'Home',
      mobile: res?.mobileNumber,
      resetAppNav: true,
      url: 'auth/v1/login',
      hideErrorToast: (err) => err.status === 401,
      body: {
        email: email,
        password: password,
        deviceId,
      },
      onConfirmOtp: (responseFinish) => {
        setLoginCredentials({ email: email, password: password });
        setString(STORAGE_KEYS.REFRESH_TOKEN, responseFinish?.refreshToken);
        clientSetToken(responseFinish?.accessToken, false);
        //set tokens
      },
      expiresIn: res?.expiresIn,
    });
  };
  const onLoginSuccess = (res: unknown) => {
    //navigate to OTP

    handleNavigateToApp(res);
  };

  const onLoginError = () => {
    const newLoginCount = loginCount + 1;
    const loginCountAsString = isAccountSuspended
      ? '3'
      : newLoginCount.toString();
    const errorMessage = isAccountSuspended
      ? 'auth.account-suspended'
      : 'auth.invalid-data';

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
    // setItem('loginCount', { state: loginCountAsString });
  };

  const { mutate: login } = useLoginStart(onLoginSuccess, onLoginError);

  const onSubmit = (values: FormikValues) => {
    setEmail(values.mail);
    setPassword(values.password);
    setLoginCount(loginCount + 1);

    const loginRequest = {
      email: values.mail,
      password: values.password,
      deviceId, // Replace with actual deviceId logic if needed
    };
    login(loginRequest);
  };

  useEffect(() => {
    if (loginCount >= 3) {
      setIsAccountSuspended(true);
    }
  }, [loginCount]);

  const quickLoginIcon = useMemo(() => {
    if (quickLoginType === 'FACE_ID') return 'ScanFace';
    if (quickLoginType === 'TOUCH_ID') return 'Fingerprint';
    return 'Lock';
  }, [quickLoginType]);

  const onPressQuickLogin = () => {
    if (quickLoginType === 'PIN_CODE') {
      navigation.navigateTo('PinLogin');
    } else {
      mutateChallenge({ email: savedMail });
    }
  };

  return (
    <Page
      testId={screenTestId}
      hasHeader={false}
      isLoading={isPendingLoginBio || isPendingChallenge || isLoading}>
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
        initialValues={{ mail: savedMail, password: savedPassword }}
        testId={screenTestId}
        onSubmit={onSubmit}
        submitButtonProps={{ textProps: { text: 'auth.login' } }}
        fields={[
          {
            name: 'mail',
            type: FormInputTypes.TextInput,
            placeholder: 'auth.email-prompt',
            labelProps: { text: 'auth.email' },
            validation: { required: true, validHRSDMail: true },
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
      {quickLoginType && (
        <>
          <Spacer isOrDivider />
          <BaseButton
            testId={screenTestId}
            onPress={onPressQuickLogin}
            variant="secondary"
            size="lg"
            // auth.FACE_ID, TOUCH_ID, CODE_PIN
            textProps={{ text: `auth.${quickLoginType}` }}
            leftIcon={{ name: quickLoginIcon }}
          />
        </>
      )}
    </Page>
  );
};

export default LoginScreen;
