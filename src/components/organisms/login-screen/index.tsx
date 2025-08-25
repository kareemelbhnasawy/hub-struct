// import LoginScreenProps from './interface';
import { Headline, Spacer } from '@/components/atoms';
import FormInputTypes from '@/components/templates/form/constants';
// import { useThemeStore } from '@/store/theme';
// import { styles } from './styles';
import HRSDLogo from '@/components/molecules/hrsd-logo';
import { Form, Page } from '@/components/templates';
import { Alert } from 'react-native';

const LoginScreen = () => {
  // const {getThemedStyles} = useThemeStore();
  // const themedStyles = getThemedStyles(styles);
  const screenTestId = 'login-screen';
  return (
    <Page testId={screenTestId} hasHeader={false}>
      <Spacer space={40} />
      <HRSDLogo testId={screenTestId} size="md" />
      <Spacer />
      <Headline
        testId={`${screenTestId}-title`}
        text="auth.login"
        size="lg"
        weight="Semibold"
      />
      <Headline
        testId={`${screenTestId}-subtitle`}
        text="Welcome to the HUB app. Login to proceed with your daily tasks"
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
            placeholder: 'Enter Your E-Mail',
            labelProps: { text: 'E-Mail' },
            validation: { required: true },
          },
          {
            name: 'password',
            type: FormInputTypes.PasswordInput,
            placeholder: 'Enter Your Password',
            labelProps: { text: 'Password' },
            validation: { required: true },
          },
        ]}
      />
    </Page>
  );
};

export default LoginScreen;
