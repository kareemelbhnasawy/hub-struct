/* eslint-disable react-native/no-inline-styles */
import { I18nManager, Pressable, Text, View } from 'react-native';
import {
  LucideIcon,
  BaseText,
  MultiColorIcon,
  CurvedHeroImage,
} from '@/components/atoms';
import { COLORS } from '@/constants';
import { useTheme, useTranslate } from '@/hooks';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { Avatar } from '@/components/molecules';

const App = () => {
  const { toggleTheme } = useTheme();
  const { changeLanguage, locale } = useTranslate();
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
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>
              {index + 1}
            </Text>
          </View>
        )}
      />
      <CurvedHeroImage>
        <View
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
        >
          <Text style={{ color: 'white' }}>Samya</Text>
        </View>
      </CurvedHeroImage>
      <Avatar
        testId="avatar"
        size="lg"
        image='https://picsum.photos/200'
      />
      <BaseText
        style={{ marginStart: 10, textAlign: 'left' }}
        text="common.welcome"
        textProps={{ name: 'hamada' }}
      >
        <BaseText
          text="common.welcome common.obj.obj1"
          textProps={{ name: 'hamada' }}
        ></BaseText>
      </BaseText>
      <Pressable onPress={toggleTheme}>
        <Text>Toggle Theme</Text>
      </Pressable>
      <MultiColorIcon
        name="bolt-circle"
        size={100}
        primaryColor={COLORS['secondary-yellow-300']}
        secondaryColor={COLORS['secondary-yellow-800']}
      />
      <LucideIcon
        name="AArrowDown"
        size={100}
        color={COLORS['secondary-orange-900']}
      />
      <Pressable onPress={() => changeLanguage(locale === 'ar' ? 'en' : 'ar')}>
        <Text>Toggle Lang</Text>
      </Pressable>
    </SafeAreaProvider>
  );
};

export default App;
