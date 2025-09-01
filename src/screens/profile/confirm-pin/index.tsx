import { Headline, Spacer } from '@/components/atoms';
import { PinCode } from '@/components/molecules';
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
    <Page testId={screenTestId} hasHeader={false} isLoading={isPending}>
      <Spacer space={50} />
      <Headline
        testId={`${screenTestId}-title`}
        text="Confirm Pin Screen"
        size="lg"
        weight="Semibold"
      />
      <Headline
        testId={`${screenTestId}-subtitle`}
        text="Confirm Pin Here"
        size="xs"
        weight="Medium"
      />
      <Spacer space={40} />
      <PinCode
        testId={screenTestId}
        onPinComplete={onConfirmPin}
        errorProps={error ? { text: 'Pin mismatch' } : undefined}
      />
      <Spacer />
    </Page>
  );
};

export default ConfirmPinScreen;
