import { Headline, Spacer } from '@/components/atoms';
import { Page } from '@/components/templates';
import { BiometryTypes } from 'react-native-biometrics';
import { useEffect, useState } from 'react';
import { BaseButton } from '@/components/molecules';
import useSetBio from '@/network/services/auth/set-bio/set-bio.hook';
import useRemoveBio from '@/network/services/auth/remove-bio/remove-bio.hook';
import {
  bioPrompt,
  deleteBioKeys,
  generateBioKeys,
  getBioType,
} from '@/utilities/biometrics';
import { useNavigation } from '@/hooks';
import { useAuthStore } from '@/store/auth';
import useRemovePin from '@/network/services/auth/remove-pin/remove-pin.hook';

const QuickLoginScreen = () => {
  const screenTestId = 'quick-login-screen';
  const navigation = useNavigation();
  const { quickLoginType, setQuickLoginType, setUsername, email } =
    useAuthStore();
  const [biometricType, setBiometricType] = useState<string | null>(null);
  const [bioEnabled, setBioEnabled] = useState(
    quickLoginType === 'FACE_ID' || quickLoginType === 'TOUCH_ID',
  );
  const [pinEnabled, setPinEnabled] = useState(quickLoginType === 'PIN_CODE');

  const onSetBioSuccess = () => {
    setQuickLoginType(biometricType || '');
    setUsername('Daniel');
    setBioEnabled(true);
    setPinEnabled(false);
  };

  const deleteBioKey = () => {
    deleteBioKeys();
    setQuickLoginType('');
    setBioEnabled(false);
  };

  const deletePinKey = () => {
    setQuickLoginType('');
    setPinEnabled(false);
  };

  const { mutate: mutateSetBio, isPending: isSetPending } =
    useSetBio(onSetBioSuccess);
  const { mutate: mutateRemoveBio, isPending: isRemovePending } =
    useRemoveBio(deleteBioKey);
  const { mutate: mutateRemovePin, isPending: isRemovePinPending } =
    useRemovePin(deletePinKey);

  useEffect(() => {
    getBiometricType();
  }, []);

  const getBiometricType = () => {
    getBioType().then((resultObject) => {
      const { available, biometryType } = resultObject;
      if (available) {
        if (biometryType === BiometryTypes.FaceID) {
          setBiometricType('FACE_ID');
        } else {
          setBiometricType('TOUCH_ID');
        }
      }
    });
  };

  const getBioKey = () => {
    bioPrompt().then((resultObject) => {
      const { success } = resultObject;
      if (success) {
        generateBioKeys().then((resultObject) => {
          const { publicKey } = resultObject;
          mutateSetBio({
            email,
            publicKey,
            biometricType,
          });
        });
      }
    });
  };

  const onPressBio = () => {
    if (bioEnabled) {
      mutateRemoveBio({ email });
    } else {
      getBioKey();
    }
  };

  const onPressPin = () => {
    if (pinEnabled) {
      mutateRemovePin({ email });
    } else {
      navigation.navigateTo('SetPin');
    }
  };

  return (
    <Page
      testId={screenTestId}
      hasHeader={false}
      isLoading={isSetPending || isRemovePending || isRemovePinPending}>
      <Spacer space={50} />
      <Headline
        testId={`${screenTestId}-title`}
        text="Quick Login Screen"
        size="lg"
        weight="Semibold"
      />
      <Headline
        testId={`${screenTestId}-subtitle`}
        text="Set Quick Login Here"
        size="xs"
        weight="Medium"
      />
      <Spacer space={40} />
      {biometricType === 'FACE_ID' && (
        <>
          <BaseButton
            testId={screenTestId}
            textProps={{ text: bioEnabled ? 'Remove Face ID' : 'Set Face ID' }}
            onPress={onPressBio}
          />
          <Spacer />
        </>
      )}
      {biometricType === 'TOUCH_ID' && (
        <>
          <BaseButton
            testId={screenTestId}
            textProps={{
              text: bioEnabled ? 'Remove Touch ID' : 'Set Touch ID',
            }}
            onPress={onPressBio}
          />
          <Spacer />
        </>
      )}
      <BaseButton
        testId={screenTestId}
        textProps={{ text: pinEnabled ? 'Remove Pin' : 'Set Pin' }}
        onPress={onPressPin}
      />
      <Spacer />
    </Page>
  );
};

export default QuickLoginScreen;
