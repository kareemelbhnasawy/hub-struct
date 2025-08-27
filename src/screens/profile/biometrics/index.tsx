import { Headline, Spacer } from '@/components/atoms';
import { Page } from '@/components/templates';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { useEffect, useState } from 'react';
import { BaseButton } from '@/components/molecules';
import { deleteKey, getString, setString } from '@/utilities';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import useSetBio from '@/network/services/auth/set-bio/set-bio.hook';
import useRemoveBio from '@/network/services/auth/remove-bio/remove-bio.hook';

const BiometricsScreen = () => {
  const screenTestId = 'biometrics-screen';
  const rnBiometrics = new ReactNativeBiometrics();
  const [bioEnabled, setBioEnabled] = useState(
    getString(STORAGE_KEYS.BIO_TYPE) ? true : false,
  );
  const [biometricType, setBiometricType] = useState<string | null>(null);

  const onSetBioSuccess = () => {
    setString(STORAGE_KEYS.BIO_TYPE, biometricType || '');
    // TODO: change to user name
    setString(STORAGE_KEYS.USER_NAME, 'Daniel');
    setBioEnabled(true);
  };

  const deleteBioKey = () => {
    rnBiometrics.deleteKeys();
    deleteKey(STORAGE_KEYS.BIO_TYPE);
    setBioEnabled(false);
  };

  const { mutate: mutateSetBio, isPending: isSetPending } =
    useSetBio(onSetBioSuccess);
  const { mutate: mutateRemoveBio, isPending: isRemovePending } =
    useRemoveBio(deleteBioKey);

  useEffect(() => {
    getBiometricType();
  }, []);

  const getBiometricType = () => {
    rnBiometrics.isSensorAvailable().then((resultObject) => {
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
    rnBiometrics
      .simplePrompt({ promptMessage: 'Confirm Biometrics' })
      .then((resultObject) => {
        const { success } = resultObject;
        if (success) {
          rnBiometrics.createKeys().then((resultObject) => {
            const { publicKey } = resultObject;
            mutateSetBio({
              // TODO: change to user email
              email: 'daniel@hrsd.gov.sa',
              publicKey,
              biometricType,
            });
          });
        }
      });
  };

  const onPressBio = () => {
    if (bioEnabled) {
      // TODO: change to user email
      mutateRemoveBio({ email: 'daniel@hrsd.gov.sa' });
    } else {
      getBioKey();
    }
  };

  return (
    <Page
      testId={screenTestId}
      hasHeader={false}
      isLoading={isSetPending || isRemovePending}>
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
      <BaseButton testId={screenTestId} textProps={{ text: 'Set Pin' }} />
      <Spacer />
    </Page>
  );
};

export default BiometricsScreen;
