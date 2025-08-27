import { Headline, Spacer } from '@/components/atoms';
import { PinCode } from '@/components/molecules';
import { Page } from '@/components/templates';
import { useNavigation } from '@/hooks';

const SetPinScreen = () => {
  const screenTestId = 'set-pin-screen';

  const navigation = useNavigation();

  return (
    <Page testId={screenTestId} hasHeader={false}>
      <Spacer space={50} />
      <Headline
        testId={`${screenTestId}-title`}
        text="Set Pin Screen"
        size="lg"
        weight="Semibold"
      />
      <Headline
        testId={`${screenTestId}-subtitle`}
        text="Set Pin Here"
        size="xs"
        weight="Medium"
      />
      <Spacer space={40} />
      <PinCode
        testId={screenTestId}
        onPinComplete={(pin) => navigation.navigateTo('ConfirmPin', { pin })}
      />
      <Spacer />
    </Page>
  );
};

export default SetPinScreen;
