import { Headline, Spacer } from '@/components/atoms';
import FormInputTypes from '@/components/templates/form/constants';
import Logo from '@/components/molecules/logo';
import { Form, Page } from '@/components/templates';
import { styles } from './styles';
import { useThemeStore } from '@/store/theme';
import { useNavigation } from '@/hooks';
import useLoginStart from '@/network/services/auth/login-start/login-start.hook';
import { FormikValues } from 'formik';
import { useEffect, useState } from 'react';
import { BaseButton, ToastService } from '@/components/molecules';
import { useDeviceId } from '@/hooks/use-device-id';
import { clientSetToken } from '@/network/utilities';
import useGenerateChallenge from '@/network/services/auth/generate-challenge/generate-challenge.hook';
import useLoginBio from '@/network/services/auth/login-bio/login-bio.hook';
import { createBioSignature } from '@/utilities/biometrics';
import { useAuthStore } from '@/store/auth';
import { isEmpty, setString } from '@/utilities';
import { STORAGE_KEYS } from '@/constants/storageKeys';

const LoginScreen = () => {
  const navigation = useNavigation();
  const screenTestId = 'login-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {
    email: savedMail,
    password: savedPassword,
    setLoginCredentials,
  } = useAuthStore();
  const { deviceId, isLoading } = useDeviceId();
  const {
    biometricType,
    getInvalidAttemptCount,
    getLoginCredentials,
    incrementInvalidAttemptCount,
    isAccountSuspended,
    setIsAccountSuspended,
  } = useAuthStore();

  const onSuccessBioLogin = (data) => {
    clientSetToken(data?.accessToken, false);
    navigation.resetToStack('App', 'Home');
  };

  const { mutate: mutateLoginBio, isPending: isPendingLoginBio } =
    useLoginBio(onSuccessBioLogin);

  const onSuccessChallenge = (data) => {
    createBioSignature(data?.challenge).then((resultObject) => {
      const { success, signature } = resultObject;

      if (success) {
        mutateLoginBio({ email: 'daniel@hrsd.gov.sa', signature });
      }
    });
  };
  const { mutate: mutateChallenge, isPending: isPendingChallenge } =
    useGenerateChallenge(onSuccessChallenge);

  const handleNavigateToApp = (res: unknown) => {
    if (!deviceId || isLoading) return;
    navigation.navigateToOTP({
      nextScreen: 'Home',
      mobile: res?.mobileNumber,
      resetAppNav: true,
      url: 'auth/v1/login',
      body: {
        email: email,
        password: password,
        deviceId,
      },
      onConfirmOtp: (responseFinish) => {
        setLoginCredentials({ email: email, password: password });
        setString(STORAGE_KEYS.REFRESH_TOKEN, responseFinish?.refreshToken);
        clientSetToken(responseFinish?.accessToken, false);
      },
      expiresIn: res?.expiresIn,
    });
  };

  const onLoginSuccess = (res: unknown) => {
    //navigate to OTP
    handleNavigateToApp(res);
  };

  const onLoginError = () => {
    const invalidAttempts = getInvalidAttemptCount();
    if (invalidAttempts >= 3) {
      setIsAccountSuspended(true);
    } else {
      incrementInvalidAttemptCount();
    }
    const loginCountAsString = getInvalidAttemptCount().toString();
    const errorMessage = isAccountSuspended
      ? 'auth.accountSuspended'
      : 'auth.invalidData';

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
  };

  const { mutate: login } = useLoginStart(onLoginSuccess, onLoginError);

  const onSubmit = (values: FormikValues) => {
    const loginRequest = {
      email: values.mail,
      password: values.password,
      deviceId: deviceId || '<DEVICE_ID>', // Replace with actual deviceId logic if needed
    };
    login(loginRequest);
  };

  useEffect(() => {
    if (biometricType) {
      mutateChallenge({ email: 'daniel@hrsd.gov.sa' });
    }
  }, [mutateChallenge, biometricType]);

  useEffect(() => {
    const loginCredentials = getLoginCredentials();
    if (getInvalidAttemptCount() >= 3) {
      setIsAccountSuspended(true);
    }
    if (!isEmpty(loginCredentials)) {
      setEmail(loginCredentials.email);
      setPassword(loginCredentials.password);
    }
  }, [getLoginCredentials, getInvalidAttemptCount]);

  return (
    <Page
      testId={screenTestId}
      hasHeader={false}
      isLoading={isPendingLoginBio || isPendingChallenge}>
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
        submitButtonProps={{
          textProps: { text: 'auth.login' },
        }}
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
      {biometricType && (
        <>
          <Spacer isOrDivider />
          <BaseButton
            testId={screenTestId}
            onPress={() => mutateChallenge({ email: 'daniel@hrsd.gov.sa' })}
            variant="secondary"
            size="lg"
            textProps={{ text: 'سجّل الدخول باستخدام بصمة الوجه' }}
            leftIcon={{ name: 'ScanFace' }}
          />
        </>
      )}
      <Spacer isOrDivider />
      <BaseButton
        testId={screenTestId}
        onPress={() => navigation.navigateTo('PinLogin')}
        variant="secondary"
        size="lg"
        textProps={{ text: 'سجل الدخول باستخدام ال PIN' }}
        leftIcon={{ name: 'Lock' }}
      />
    </Page>
  );
};

export default LoginScreen;
