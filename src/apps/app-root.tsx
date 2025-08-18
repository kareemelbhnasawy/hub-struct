/* eslint-disable */
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { CurvedHeroImage, Headline } from '@/components/atoms';
import { useTranslate } from '@/hooks';
import { crash, getCrashlytics } from '@react-native-firebase/crashlytics';
import { useThemeStore } from '@/store/theme';
import ListDemo from '@/components/organisms/list/demo';
import FrostedGlassCard from '@/components/atoms/glass-effect-view';

const AppRoot = () => {
  const { changeLanguage, locale } = useTranslate();
  const crashlytics = getCrashlytics();
  const { toggleTheme } = useThemeStore();

  return (
    <>
      <ScrollView>
        <CurvedHeroImage>
          <View
            style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <FrostedGlassCard />
          </View>
        </CurvedHeroImage>
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
        <Pressable
          onPress={() => changeLanguage(locale === 'ar' ? 'en' : 'ar')}>
          <Text>Toggle Lang</Text>
        </Pressable>
        <ListDemo />
        {/* <BadgeDemo /> */}
      </ScrollView>
    </>
  );
};

export default AppRoot;
