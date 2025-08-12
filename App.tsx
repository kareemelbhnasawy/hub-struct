/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { I18nManager, Pressable, ScrollView, Text, View } from 'react-native';
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
import { BaseButton, DescriptiveIcon } from '@/components/molecules';

const App = () => {
  const { toggleTheme, theme } = useTheme();
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
      <ScrollView>
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
        <Pressable
          onPress={() => {
            toggleTheme();
          }}>
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
        <Pressable
          onPress={() => changeLanguage(locale === 'ar' ? 'en' : 'ar')}>
          <Text>Toggle Lang</Text>
        </Pressable>
        <View
          style={{ alignContent: 'center', alignItems: 'center', rowGap: 5 }}>
          <BaseButton
            variant="primary"
            size="sm"
            textProps={{ text: 'I am a primary button ' }}
          />
          <BaseButton
            variant="primary"
            size="md"
            textProps={{ text: 'I am a primary button ' }}
            leftIcon={{ name: 'ArrowLeft' }}
          />
          <BaseButton
            variant="primary"
            size="lg"
            textProps={{ text: 'I am a primary button ' }}
            rightIcon={{ name: 'ArrowRight' }}
          />
          <BaseButton
            variant="primary"
            size="xl"
            textProps={{ text: 'I am a primary button ' }}
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
          />
          <BaseButton
            variant="primary"
            size="xxl"
            textProps={{ text: 'I am a primary button ' }}
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
          />
          <BaseButton
            variant="primary"
            leftIcon={{ name: 'ArrowLeft' }}
            textProps={{ text: 'I am a primary button ' }}
          />
          <BaseButton
            variant="primary"
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a primary button ' }}
          />
          <BaseButton
            variant="primary"
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a primary button ' }}
          />
          <BaseButton
            variant="primary"
            disabled
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a primary button ' }}
          />
          <BaseButton
            variant="primary"
            loading
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a primary button ' }}
          />
          <BaseButton
            variant="primary"
            error
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a primary button ' }}
          />
          <BaseButton
            variant="primary"
            focusable
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a primary button ' }}
          />
          <BaseButton
            variant="primary"
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a primary button ' }}
          />
          <Spacer space={40} />
          {/* 

                  SPACE SO I DON'T LOSE MY MENTAL HEALTH

          */}
          <Spacer space={40} />
          <BaseButton
            variant="secondary"
            size="sm"
            textProps={{ text: 'I am a secondary button ' }}
          />
          <BaseButton
            variant="secondary"
            size="md"
            textProps={{ text: 'I am a secondary button ' }}
            leftIcon={{ name: 'ArrowLeft' }}
          />
          <BaseButton
            variant="secondary"
            size="lg"
            textProps={{ text: 'I am a secondary button ' }}
            rightIcon={{ name: 'ArrowRight' }}
          />
          <BaseButton
            variant="secondary"
            size="xl"
            textProps={{ text: 'I am a secondary button ' }}
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
          />
          <BaseButton
            variant="secondary"
            size="xxl"
            textProps={{ text: 'I am a secondary button ' }}
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
          />
          <BaseButton
            variant="secondary"
            leftIcon={{ name: 'ArrowLeft' }}
            textProps={{ text: 'I am a secondary button ' }}
          />
          <BaseButton
            variant="secondary"
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a secondary button ' }}
          />
          <BaseButton
            variant="secondary"
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a secondary button ' }}
          />
          <BaseButton
            variant="secondary"
            disabled
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a secondary button ' }}
          />
          <BaseButton
            variant="secondary"
            loading
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a secondary button ' }}
          />
          <BaseButton
            variant="secondary"
            error
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a secondary button ' }}
          />
          <BaseButton
            variant="secondary"
            focusable
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a secondary button ' }}
          />
          <BaseButton
            variant="secondary"
            leftIcon={{ name: 'ArrowLeft' }}
            rightIcon={{ name: 'ArrowRight' }}
            textProps={{ text: 'I am a secondary button ' }}
          />
          <Spacer space={40} />
          {/* 

                  SPACE SO I DON'T LOSE MY MENTAL HEALTH

          */}
          <Spacer space={40} />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default App;
