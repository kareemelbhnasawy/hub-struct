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
import { useState } from 'react';
import { log } from '@/utilities';
import { ToastService } from '@/components/molecules';

const LoginScreen = () => {
  const navigation = useNavigation();
  const screenTestId = 'login-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const mmkv = getMMKVStorage<string>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleNavigateToApp = () => {
    navigation.navigate('App');
  };

  const onLoginSuccess = () => {
    //save data
    mmkv.setItem('email', { state: email, version: Date.now() });
    mmkv.setItem('password', { state: password, version: Date.now() });
    log(mmkv.getItem('email'));
    log(mmkv.getItem('password'));

    //navigate to OTP
    handleNavigateToApp();
  };

  const onLoginError = () => {
    // Show Toast
    ToastService.error({
        props: {
          messageProps: { text: 'auth.invalidData' },
          testId: '',
        },
        duration: 4000,
      });
  };

  const { mutate: login } = useLoginStart(onLoginSuccess, onLoginError);

  const onSubmit = (values: FormikValues) => {
    setEmail(values.mail);
    setPassword(values.password);
    const loginRequest = {
      email: values.mail,
      password: values.password,
      deviceId: 'some-device-id', // Replace with actual deviceId logic if needed
    };

    login(loginRequest);
  };

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
