import { Headline, Spacer } from '@/components/atoms';
import { PinCode, Logo } from '@/components/molecules';
import { Page } from '@/components/templates';
import { useNavigation } from '@/hooks';
import useSetPin from '@/network/services/auth/set-pin/set-pin.hook';
import { useAuthStore } from '@/store/auth';
import { useState } from 'react';

const ConfirmPinScreen = () => {
  const screenTestId = 'confirm-pin-screen';
  const navigation = useNavigation<'ConfirmPin'>();
  const { pin } = navigation.params;
  const [error, setError] = useState(false);
  const { setQuickLoginType, setUsername, email } = useAuthStore();

  const onSuccess = () => {
    setUsername('Daniel');
    setQuickLoginType('PIN_CODE');
    navigation.navigateTo('Home');
  };
  const { mutate, isPending } = useSetPin(onSuccess);
  const onConfirmPin = (value: string) => {
    if (value !== pin) {
      setError(true);
    } else {
      setError(false);
      mutate({ email, pinCode: pin });
    }
  };

  return (
    <Page testId={screenTestId} hasHeader={true} isLoading={isPending}>
      <Spacer space={50} />
      <Logo testId={screenTestId} size="md" />
      <Spacer space={24} />
      <Headline
        testId={`${screenTestId}-title`}
        text="profile.confirmPin.confirmTitle"
        size="sm"
        weight="Semibold"
      />
      <Spacer space={'xl'} />
      <Headline
        testId={`${screenTestId}-subtitle`}
        text="profile.confirmPin.confirmSubtitle"
        size="xs"
        weight="Medium"
      />
      <Spacer space={40} />
      <PinCode
        secureTextEntry={true}
        testId={screenTestId}
        onPinComplete={onConfirmPin}
        errorProps={error ? { text: 'Pin mismatch' } : undefined}
      />
      <Spacer />
    </Page>
  );
};

export default ConfirmPinScreen;
