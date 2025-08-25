import { Headline, Spacer } from '@/components/atoms';
import FormInputTypes from '@/components/templates/form/constants';
import Logo from '@/components/molecules/logo';
import { Form, Page } from '@/components/templates';
import { Alert } from 'react-native';

const LoginScreen = () => {
  const screenTestId = 'login-screen';
  return (
    <Page testId={screenTestId} hasHeader={false}>
      <Spacer space={40} />
      <Logo testId={screenTestId} size="md" />
      <Spacer />
      <Headline
        testId={`${screenTestId}-title`}
        text="auth.login"
        size="lg"
        weight="Semibold"
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
            testId: 'email-input',
            placeholder: 'auth.email-prompt',
            labelProps: { text: 'auth.email' },
            validation: { required: true },
          },
          {
            name: 'password',
            type: FormInputTypes.PasswordInput,
            testId: 'password-input',
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
