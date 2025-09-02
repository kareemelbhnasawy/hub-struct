import { Headline, Spacer } from '@/components/atoms';
import { PinCode } from '@/components/molecules';
import Logo from '@/components/molecules/logo';
import { Page } from '@/components/templates';
import { useNavigation } from '@/hooks';
import { View } from 'react-native';

const SetPinScreen = () => {
  const screenTestId = 'set-pin-screen';
  const navigation = useNavigation();

  return (
    <Page testId={screenTestId} hasHeader={true}>
      <Spacer space={50} />
      <View>
        <Logo testId={screenTestId} size="md" />
      </View>
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
