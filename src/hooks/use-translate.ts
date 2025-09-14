import { useTranslation } from 'react-i18next';
import i18n, { resources } from '@/localization';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { I18nManager } from 'react-native';
import { getString, setString } from '../utilities/storage';
import RNRestart from 'react-native-restart';

const useTranslate = () => {
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    setString(STORAGE_KEYS.LANGUAGE, lang);
    I18nManager.isRTL = lang === 'ar';
    I18nManager.forceRTL(lang === 'ar');
    i18n.changeLanguage(lang);
    RNRestart.Restart();
  };
  const toggleLanguage = () => {
    const locale = getString(STORAGE_KEYS.LANGUAGE);
    const lang = locale === 'ar' ? 'en' : 'ar';
    setString(STORAGE_KEYS.LANGUAGE, lang);
    I18nManager.isRTL = lang === 'ar';
    I18nManager.forceRTL(lang === 'ar');
    RNRestart.Restart();
  };

  const translate = (string: string, options?: { [string]: string }) => {
    if (!string) {
      return '';
    }
    const spaceSplitStr = string.toString().split(' ');
    const res: string[] = [];
    spaceSplitStr.forEach((str) => {
      if (!str.includes('.')) {
        res.push(str);
      } else {
        const [namespace, ...rest] = str.split('.');
        const key = rest.join('.');
        if (!Object.keys(resources.en).includes(namespace)) {
          res.push(str);
        } else {
          const translated = t(key, { ns: namespace, ...options });
          if (typeof translated === 'string') res.push(translated.toString());
          else {
            console.error(
              `Invalid translation for ${key} in namespace: ${namespace}`,
            );
            res.push('Invalid Translation');
          } // if (rarely) translated is not a string, then we at least have a key to know where it failed
        }
      }
    });
    return res.join(' ');
  };
  return {
    translate,
    isRTL: I18nManager.isRTL,
    changeLanguage,
    locale: i18n.language,
    toggleLanguage,
  };
};

export default useTranslate;
