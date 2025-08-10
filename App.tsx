import './src/style/global.css';
import './src/localization';
import { Pressable, Text, View } from 'react-native';
import { LucideIcon, BaseText, MultiColorIcon } from '@/components/atoms';
import { COLORS } from '@/constants';
import { useTheme, useTranslate } from '@/hooks';
import { crash, getCrashlytics } from '@react-native-firebase/crashlytics';
import { useEffect } from 'react';

const App = () => {
  const { toggleTheme } = useTheme();
  const { changeLanguage, locale } = useTranslate();

  const crashlytics = getCrashlytics();

  useEffect(() => {
    if (crashlytics) crashlytics.log('App mounted.');
  }, [crashlytics]);

  return (
    <View className="mt-96 bg-white dark:bg-black">
      <BaseText
        text="common.welcome"
        textProps={{ name: 'hamada' }}
        className="text-alpha-green-50 dark:text-primary-25 paragraph-spacing-text-xl">
        <BaseText
          text="common.welcome common.obj.obj1"
          textProps={{ name: 'hamada' }}
          className="underline"></BaseText>
      </BaseText>
      <Pressable
        onPress={toggleTheme}
        className="mt-3 py-2 bg-primary-600 dark:bg-gray-700 rounded ">
        <Text className="text-light-text dark:text-white line-heights-text-xs">
          Toggle Theme
        </Text>
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
      <Pressable
        onPress={() => crash(crashlytics)}
        className="mt-4 ml-2 mr-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-8 border-al">
        <Text className="text-center text-light-text dark:text-white text-20 font-regular background-white">
          CRASH MY APP
        </Text>
      </Pressable>
      <Pressable
        onPress={() => changeLanguage(locale === 'ar' ? 'en' : 'ar')}
        className="mt-4 ml-2 mr-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-8 border-al">
        <Text className="text-light-text dark:text-white text-20 font-regular background-white">
          Toggle Lang
        </Text>
      </Pressable>
    </View>
  );
};

export default App;
