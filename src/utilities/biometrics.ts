import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();
export const getBioType = () => {
  return rnBiometrics.isSensorAvailable();
};

export const bioPrompt = () => {
  return rnBiometrics.simplePrompt({ promptMessage: 'Confirm Biometrics' });
};

export const generateBioKeys = () => {
  return rnBiometrics.createKeys();
};

export const deleteBioKeys = () => {
  rnBiometrics.deleteKeys();
};

export const createBioSignature = (challenge: string) => {
  return rnBiometrics.createSignature({
    promptMessage: 'Sign in',
    payload: challenge,
  });
};
