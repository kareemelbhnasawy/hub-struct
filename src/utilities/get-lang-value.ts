import { I18nManager } from 'react-native';

const getLangValue = (arValue: unknown, enValue: unknown) => {
  if (I18nManager.isRTL) {
    return arValue;
  } else {
    return enValue;
  }
};

export default getLangValue;
