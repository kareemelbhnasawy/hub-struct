/* eslint-disable react-native/no-inline-styles */
import { I18nManager, Pressable, Text, View } from 'react-native';
import {
  LucideIcon,
  BaseText,
  MultiColorIcon,
  CurvedHeroImage,
  Spacer,
  Headline,
} from '@/components/atoms';
import { COLORS } from '@/style';
import { useTheme, useTranslate } from '@/hooks';
import { crash, getCrashlytics, log } from '@react-native-firebase/crashlytics';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { checkPermissions } from '@/utilities/permissions';
import { requestNotifications } from 'react-native-permissions';
import Display from '@/components/atoms/typography/headline';

const App = () => {
  const { toggleTheme } = useTheme();
  const { changeLanguage, locale } = useTranslate();

  const crashlytics = getCrashlytics();

  useEffect(() => {
    if (crashlytics) log(crashlytics, 'App mounted.');
    checkPermissions();

    requestNotifications();
  }, [crashlytics]);

  const DATA = [
    {
      color: '#FF0000',
    },
    {
      color: '#00FF00',
    },
    {
      color: '#0000FF',
    },
    {
      color: '#FF0000',
    },
    {
      color: '#00FF00',
    },
    {
      color: '#0000FF',
    },
    {
      color: '#FF0000',
    },
    {
      color: '#00FF00',
    },
    {
      color: '#0000FF',
    },
    {
      color: '#FF0000',
    },
    {
      color: '#00FF00',
    },
    {
      color: '#0000FF',
    },
    {
      color: '#FF0000',
    },
    {
      color: '#00FF00',
    },
    {
      color: '#0000FF',
    },
    {
      color: '#FF0000',
    },
    {
      color: '#00FF00',
    },
    {
      color: '#0000FF',
    },
    {
      color: '#FF0000',
    },
    {
      color: '#00FF00',
    },
    {
      color: '#0000FF',
    },
  ];
  return (
    <SafeAreaProvider style={{ direction: I18nManager.isRTL ? 'rtl' : 'ltr' }}>
      <FlashList
        data={DATA}
        horizontal
        renderItem={({ item, index }) => (
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: item.color,
              marginStart: 10,
            }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              {index + 1}
            </Text>
          </View>
        )}
      />
      <CurvedHeroImage>
        <View
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={{ color: 'white' }}>Samya</Text>
        </View>
      </CurvedHeroImage>
      <BaseText
        style={{ marginStart: 10, textAlign: 'left' }}
        text="common.welcome"
        textProps={{ name: 'hamada' }}>
        <BaseText
          text="common.welcome common.obj.obj1"
          textProps={{ name: 'hamada' }}></BaseText>
      </BaseText>
      <Display
        weight="Bold"
        size="xl"
        text="common.welcome"
        textProps={{ name: 'hamada' }}
      />
      <Pressable onPress={toggleTheme}>
        <Text>Toggle Theme</Text>
      </Pressable>
      <MultiColorIcon
        name="bolt-circle"
        size={100}
        primaryColor={COLORS['secondary-yellow-300']}
        secondaryColor={COLORS['secondary-yellow-800']}
      />
      <Spacer />
      <LucideIcon
        name="AArrowDown"
        size={100}
        color={COLORS['secondary-orange-900']}
      />
      <Pressable onPress={() => crash(crashlytics)}>
        <Text>CRASH MY APP</Text>
      </Pressable>
      <Pressable onPress={() => changeLanguage(locale === 'ar' ? 'en' : 'ar')}>
        <Text>Toggle Lang</Text>
      </Pressable>
      <View
        style={{ alignContent: 'center', alignItems: 'flex-start', rowGap: 5 }}>
        <Headline text="ICONS" />
        <LucideIcon
          name="AArrowDown"
          size={100}
          color={COLORS['secondary-orange-900']}
          isCircle
        />
        <LucideIcon name="UserCheck" isCircle />
        <LucideIcon name="UserCheck" isOutline />
        <LucideIcon name="UserCheck" hasWrapper />
        <LucideIcon name="UserCheck" />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
