import { Headline, Spacer } from '@/components/atoms';
import { PinCode, Logo } from '@/components/molecules';
import { Page } from '@/components/templates';
import { useNavigation } from '@/hooks';
import { View } from 'react-native';

const SetPinScreen = () => {
  const screenTestId = 'set-pin-screen';
  const navigation = useNavigation();

  return (
    <Page testId={screenTestId} hasHeader={true}>
      <Spacer space={50} />
      <Logo testId={screenTestId} size="md" />
      <Spacer space={24} />
      <Headline
        testId={`${screenTestId}-title`}
        text="profile.setPin.createTitle"
        size="sm"
        weight="Semibold"
      />
      <Spacer space={'xl'} />
      <Headline
        testId={`${screenTestId}-subtitle`}
        text="profile.setPin.chooseSixDigits"
        size="xs"
        weight="Medium"
      />
      <Headline
        testId={`${screenTestId}-hint`}
        text="profile.setPin.avoidPatterns"
        size="xs"
        weight="Medium"
      />
      <Spacer space={40} />
      <View>
        <PinCode
          secureTextEntry={true}
          testId={screenTestId}
          onPinComplete={(pin) => navigation.navigateTo('ConfirmPin', { pin })}
        />
      </View>
      <Spacer />
    </Page>
  );
};

export default SetPinScreen;
