import './src/style/global.css';
import { Pressable, Text, View } from 'react-native';
import { useTheme } from './src/hooks/useTheme';
import BaseText from './src/components/atoms/base-text/base-text.component';
import { useTranslate } from './src/hooks/useTranslate';
import Icon from './src/components/atoms/icon/icon.component';
import { COLORS } from './src/constants/colors.constant';
import Spacer from './src/components/atoms/spacer/spacer.component';

function App() {
  const { toggleTheme } = useTheme();
  const { changeLanguage, locale } = useTranslate();
  return (
    <View className="mt-40 bg-white dark:bg-black">
      <BaseText
        text="common.welcome"
        textProps={{ name: 'hamada' }}
        className="text-alpha-green-50 dark:text-primary-25 paragraph-spacing-text-xl"
      >
        {' '}
        <BaseText
          text="common.welcome common.obj.obj1"
          textProps={{ name: 'hamada' }}
          className="underline"
        >
          {' '}
          salwa
        </BaseText>
      </BaseText>
      <Pressable
        onPress={toggleTheme}
        className="mt-3 py-2 bg-primary-600 dark:bg-gray-700 rounded "
      >
        <Text className="text-light-text dark:text-white line-heights-text-xs">
          Toggle Theme
        </Text>
      </Pressable>
      <Spacer space={'3xl'} divider />
      <Icon
        name="bolt-circle"
        size={300}
        primaryColor={COLORS['secondary-yellow-300']}
        secondaryColor={COLORS['secondary-yellow-800']}
      />
      <Pressable
        onPress={() => changeLanguage(locale === 'ar' ? 'en' : 'ar')}
        className="mt-4 ml-2 mr-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-8 border-al"
      >
        <Text className="text-light-text dark:text-white text-20 font-regular background-white">
          Toggle Lang
        </Text>
      </Pressable>
    </View>
  );
}

export default App;
