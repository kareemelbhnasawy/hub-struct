import ReactNativeBiometrics from 'react-native-biometrics';
import getLangValue from './get-lang-value';

const rnBiometrics = new ReactNativeBiometrics();
export const getBioType = () => {
  return rnBiometrics.isSensorAvailable();
};

export const bioPrompt = () => {
  return rnBiometrics.simplePrompt({
    promptMessage: getLangValue('تأكيد البيانات الحيوية', 'Confirm Biometrics'),
    cancelButtonText: getLangValue('إلغاء', 'Cancel'),
  });
};

export const generateBioKeys = () => {
  return rnBiometrics.createKeys();
};

export const deleteBioKeys = () => {
  rnBiometrics.deleteKeys();
};

export const createBioSignature = (challenge: string) => {
  return rnBiometrics.createSignature({
    promptMessage: getLangValue('تطبيق الوزارة', 'Ministry application'),
    payload: challenge,
    cancelButtonText: getLangValue('إلغاء', 'Cancel'),
  });
};
