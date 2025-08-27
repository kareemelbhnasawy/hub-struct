import { Headline, Spacer } from '@/components/atoms';
import FormInputTypes from '@/components/templates/form/constants';
import Logo from '@/components/molecules/logo';
import { Form, Page } from '@/components/templates';
import { Alert } from 'react-native';
import { styles } from './styles';
import { useThemeStore } from '@/store/theme';
import { useEffect } from 'react';
import { getStorageString } from '@/utilities';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import useGenerateChallenge from '@/network/services/auth/generate-challenge/generate-challenge.hook';
import { createBioSignature } from '@/utilities/biometrics';

const LoginScreen = () => {
  const screenTestId = 'login-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const onSuccessChallenge = (data) => {
    createBioSignature(data?.challenge).then((resultObject) => {
      const { success, signature } = resultObject;
      if (success && signature) {
        // console.log(signature);
      }
    });
  };
  const { mutate: mutateChallenge } = useGenerateChallenge(onSuccessChallenge);

  useEffect(() => {
    const bioType = getStorageString(STORAGE_KEYS.BIO_TYPE);
    if (bioType) {
      mutateChallenge({ email: 'daniel@hrsd.gov.sa' });
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
