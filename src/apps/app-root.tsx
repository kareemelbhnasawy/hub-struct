/* eslint-disable */
import { Pressable, ScrollView, Text, View } from 'react-native';
import { CurvedHeroImage, Headline } from '@/components/atoms';
import { useTranslate } from '@/hooks';
import { crash, getCrashlytics } from '@react-native-firebase/crashlytics';
import { useThemeStore } from '@/store/theme';
import BadgeDemo from '@/components/molecules/badge/demo';

const AppRoot = () => {
  const { changeLanguage, locale } = useTranslate();
  const crashlytics = getCrashlytics();
  const { toggleTheme } = useThemeStore();

  return (
    <>
      {/* <CurvedHeroImage>
        <View
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={{ color: 'white' }}>Samya</Text>
        </View>
      </CurvedHeroImage> */}
      <Headline text="common.welcome" />
      <Pressable
        onPress={() => {
          toggleTheme();
        }}>
        <Text>Toggle Theme</Text>
      </Pressable>
      <Pressable onPress={() => crash(crashlytics)}>
        <Text>CRASH MY APP</Text>
      </Pressable>
      <Pressable onPress={() => changeLanguage(locale === 'ar' ? 'en' : 'ar')}>
        <Text>Toggle Lang</Text>
      </Pressable>
      <BadgeDemo />
    </>
  );
};

export default AppRoot;
