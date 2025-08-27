import { Headline, Paragraph, Spacer } from '@/components/atoms';
import Logo from '@/components/molecules/logo';
import { Page } from '@/components/templates';
import { styles } from './styles';
import { useThemeStore } from '@/store/theme';
import { useNavigation } from '@/hooks';
import { BaseButton, PinCode } from '@/components/molecules';
import { clientSetToken } from '@/network/utilities';
import useLoginPin from '@/network/services/auth/login-pin/login-pin.hook';
import { View } from 'react-native';

const PinLoginScreen = () => {
  const navigation = useNavigation();
  const screenTestId = 'pin-login-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const onSuccessPinLogin = (data) => {
    clientSetToken(data?.accessToken, false);
    navigation.resetToStack('App', 'Home');
  };

  const { mutate, isPending } = useLoginPin(onSuccessPinLogin);

  return (
    <Page testId={screenTestId} hasHeader={false} isLoading={isPending}>
      <Spacer space={50} />
      <Logo testId={screenTestId} size="md" />
      <Spacer space={20} />
      <Paragraph testId={screenTestId} text="هلا" />
      <Headline
        testId={`${screenTestId}-title`}
        text="أبو عبدالرحمن"
        size="xs"
        weight="Bold"
        style={themedStyles.defaultText}
      />
      <Headline
        testId={`${screenTestId}-subtitle`}
        text="أدخل رمز الـ PIN لتكمل مهامك اليومية."
        size="xs"
        weight="Medium"
        style={themedStyles.defaultText}
      />
      <Spacer space={40} />
      <View>
        <PinCode
          secureTextEntry
          testId={screenTestId}
          onPinComplete={(pinCode) =>
            mutate({ email: 'daniel@hrsd.gov.sa', pinCode })
          }
        />
      </View>
      <Spacer isOrDivider space="4xl" />
      <BaseButton
        testId={screenTestId}
        size="lg"
        variant="secondary"
        textProps={{ text: 'سجّل الدخول بالبريد الإلكتروني' }}
      />
    </Page>
  );
};

export default PinLoginScreen;
