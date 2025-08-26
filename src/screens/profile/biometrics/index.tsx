import { Headline, Spacer } from '@/components/atoms';
import { Page } from '@/components/templates';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { useEffect, useState } from 'react';
import { BaseButton } from '@/components/molecules';
import { deleteKey, getString, setString } from '@/utilities';
import { STORAGE_KEYS } from '@/constants/storageKeys';

const BiometricsScreen = () => {
  const screenTestId = 'biometrics-screen';
  const rnBiometrics = new ReactNativeBiometrics();
  const [bioEnabled, setBioEnabled] = useState(
    getString(STORAGE_KEYS.BIO_TYPE) ? true : false,
  );
  const [bioType, setBioType] = useState<string | null>(null);

  useEffect(() => {
    getBioType();
  }, []);

  const getBioType = () => {
    rnBiometrics.isSensorAvailable().then((resultObject) => {
      const { available, biometryType } = resultObject;
      if (available) {
        if (biometryType === BiometryTypes.FaceID) {
          setBioType('FACE_ID');
        } else {
          setBioType('TOUCH_ID');
        }
      }
    });
  };

  const getBioKey = () => {
    rnBiometrics
      .simplePrompt({ promptMessage: 'Confirm Biometrics' })
      .then((resultObject) => {
        const { success } = resultObject;
        if (success) {
          console.log('successful biometrics provided');
          rnBiometrics.createKeys().then((resultObject) => {
            const { publicKey } = resultObject;
            console.log(publicKey);
            // TODO: move to onSuccess save public key
            setString(STORAGE_KEYS.BIO_TYPE, bioType || '');
            // TODO: change to user name
            setString(STORAGE_KEYS.USER_NAME, 'Daniel');
            setBioEnabled(true);
          });
        } else {
          console.log('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
  };

  // TODO: move to onSuccess delete public key
  const deleteBioKey = () => {
    rnBiometrics.deleteKeys().then((resultObject) => {
      const { keysDeleted } = resultObject;

      if (keysDeleted) {
        deleteKey(STORAGE_KEYS.BIO_TYPE);
        setBioEnabled(false);
      } else {
        console.log(
          'Unsuccessful deletion because there were no keys to delete',
        );
      }
    });
  };

  const onPressBio = () => {
    if (bioEnabled) {
      deleteBioKey();
    } else {
      getBioKey();
    }
  };

  return (
    <Page testId={screenTestId} hasHeader={false}>
      <Spacer space={50} />
      <Headline
        testId={`${screenTestId}-title`}
        text="Profile Bio Screen"
        size="lg"
        weight="Semibold"
      />
      <Headline
        testId={`${screenTestId}-subtitle`}
        text="Set Bio Here"
        size="xs"
        weight="Medium"
      />
      <Spacer space={40} />
      {bioType === 'FACE_ID' && (
        <>
          <BaseButton
            testId={screenTestId}
            textProps={{ text: bioEnabled ? 'Remove Face ID' : 'Set Face ID' }}
            onPress={onPressBio}
          />
          <Spacer />
        </>
      )}
      {bioType === 'TOUCH_ID' && (
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
      <BaseButton testId={screenTestId} textProps={{ text: 'Set Pin' }} />
      <Spacer />
    </Page>
  );
};

export default BiometricsScreen;
