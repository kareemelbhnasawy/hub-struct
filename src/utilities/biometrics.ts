import { I18nManager } from 'react-native';
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
    promptMessage: I18nManager.isRTL ? 'تطبيق الوزارة' : 'Ministry application',
    payload: challenge,
    cancelButtonText: I18nManager.isRTL ? 'إلغاء' : 'Cancel',
  });
};
