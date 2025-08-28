import { Headline, Spacer } from '@/components/atoms';
import { Page } from '@/components/templates';
import { BiometryTypes } from 'react-native-biometrics';
import { useEffect, useState } from 'react';
import { BaseButton } from '@/components/molecules';
import { deleteKey, getString, setString } from '@/utilities';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import useSetBio from '@/network/services/auth/set-bio/set-bio.hook';
import useRemoveBio from '@/network/services/auth/remove-bio/remove-bio.hook';
import {
  bioPrompt,
  deleteBioKeys,
  generateBioKeys,
  getBioType,
} from '@/utilities/biometrics';
import { useNavigation } from '@/hooks';

const QuickLoginScreen = () => {
  const screenTestId = 'quick-login-screen';
  const navigation = useNavigation();
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
    deleteBioKeys();
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
      <BaseButton
        testId={screenTestId}
        textProps={{ text: 'Set Pin' }}
        onPress={() => navigation.navigateTo('SetPin')}
      />
      <Spacer />
    </Page>
  );
};

export default QuickLoginScreen;
