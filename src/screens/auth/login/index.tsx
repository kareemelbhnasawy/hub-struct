import { Headline, Spacer } from '@/components/atoms';
import FormInputTypes from '@/components/templates/form/constants';
import Logo from '@/components/molecules/logo';
import { Form, Page } from '@/components/templates';
import { Alert } from 'react-native';
import { styles } from './styles';
import { useThemeStore } from '@/store/theme';
import { useEffect } from 'react';
import { getString } from '@/utilities';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import ReactNativeBiometrics from 'react-native-biometrics';

const LoginScreen = () => {
  const screenTestId = 'login-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  // TODO: change to API response
  const challenge = 'challenge';

  useEffect(() => {
    const bioType = getString(STORAGE_KEYS.BIO_TYPE);
    if (bioType) {
      const rnBiometrics = new ReactNativeBiometrics();

      rnBiometrics
        .createSignature({
          promptMessage: 'Sign in',
          payload: challenge,
        })
        .then((resultObject) => {
          const { success, signature } = resultObject;

          if (success) {
            console.log(signature);
          }
        });
    }
  }, []);

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
        //todo: add color
        style={themedStyles.defaultText}
      />
      <Headline
        testId={`${screenTestId}-subtitle`}
        text="auth.description"
        size="xs"
        weight="Medium"
      />
      <Spacer space={40} />
      <Form
        testId={screenTestId}
        onSubmit={(values) => Alert.alert(JSON.stringify(values))}
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
