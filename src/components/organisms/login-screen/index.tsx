import { View } from 'react-native';
import LoginScreenProps from './interface';
import {  Headline, Spacer } from '@/components/atoms';
import Form from '@/components/templates/form/form.component';
import FormInputTypes from '@/components/templates/form/constants';
import { useThemeStore } from '@/store/theme';
import { styles } from './styles';
import HRSDLogo from '@/components/molecules/hrsd-logo';

const LoginScreen = ({ testId }: LoginScreenProps) => {
    const {getThemedStyles} = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  return (
    <View testID={`${testId}-LoginScreen`} style={themedStyles.wrapper}>
        <Spacer space={40} />
      <HRSDLogo testId={`${testId}-HRSD-Logo`} size='md' />
      <Spacer />
      <Headline
        testId={`${testId}-LoginScreen-Title`}
        text="Login"
        size="lg"
        weight="Semibold"
        isTranslated
      />
      <Headline
        testId={`${testId}-LoginScreen-Subtitle`}
        text="Welcome to the HUB app. Login to proceed with your daily tasks"
        size="xs"
        weight="Medium"
        isTranslated
      />
      <Spacer space={40} />
      <View>
        <Form
          testId={`${testId}-LoginScreen-Form`}
          onSubmit={() => {}}
          fields={[
            {
              name: 'E-Mail',
              type: FormInputTypes.TextInput,
              testId: 'email-input',
              placeholder: 'Enter Your E-Mail',
              labelProps: { text: 'E-Mail' },
              validation: { required: true, type: 'string' },
            },
            {
              name: 'password',
              type: FormInputTypes.PasswordInput,
              testId: 'password-input',
              placeholder: 'Enter Your Password',
              labelProps: { text: 'Password' },
              validation: { required: true, type: 'string' },
            }
          ]}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
