
import "./src/style/global.css"
import './src/localization';
import {
  Pressable,
  Text,
  View,
} from 'react-native';
import { useTheme } from "./src/hooks/useTheme";
import BaseText from "./src/components/atoms/base-text/base-text.component";
import { useTranslate } from "./src/hooks/useTranslate";

function App() {
  const { toggleTheme } = useTheme();
  const { changeLanguage, locale } = useTranslate();
  return (
    <View className="mt-96 flex-row justify-between bg-white dark:bg-black">
      <BaseText textProps={{name:"hamada"}} className="text-red-300 dark:text-primary">common.welcome</BaseText>

      <Pressable onPress={toggleTheme} className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
        <Text className="text-light-text dark:text-white">Toggle Theme</Text>
      </Pressable>
      <Pressable onPress={()=>changeLanguage(locale ==='ar'?'en':'ar')} className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
        <Text className="text-light-text dark:text-white">Toggle Lang</Text>
      </Pressable>
    </View>
  );
}

export default App;
