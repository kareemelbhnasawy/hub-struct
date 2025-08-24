import { View } from 'react-native';
import LoginScreenProps from './interface';
import { BaseImage, Headline, Spacer } from '@/components/atoms';
import { scale } from '@/store/theme/utils';
import Form from '@/components/templates/form/form.component';
import FormInputTypes from '@/components/templates/form/constants';
import { useThemeStore } from '@/store/theme';
import { styles } from './styles';

const LoginScreen = ({ testId }: LoginScreenProps) => {
    const {getThemedStyles} = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  return (
    <View testID={`${testId}-LoginScreen`} style={themedStyles.wrapper}>
        <Spacer space={40} />
      <BaseImage
        testId={`${testId}-HRSD-Logo`}
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        image={require('@/assets/images/HRSD-Logo.png')}
        width={scale(40)}
        height={scale(40)}
      />
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
