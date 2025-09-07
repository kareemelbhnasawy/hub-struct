/* eslint-disable */
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { useNavigation, useTranslate } from '@/hooks';
import DemoTopTabs from '@/components/organisms/top-tabs/demo';
import { useThemeStore } from '@/store/theme';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleNavigateToProfile = () => {
    navigation.navigate('ProfileStack', { userId: '123' });
  };
  const { changeLanguage } = useTranslate();
  // changeLanguage('ar');
  return (
    <View style={styles.container.base}>
      <Text>This is Home</Text>

      <Pressable
        onPress={handleNavigateToProfile}
        style={styles.profileButton.base}>
        <Text style={styles.profileButtonText.base}>Go to Profile</Text>
      </Pressable>
      <DemoTopTabs />
    </View>
  );
};

export default HomeScreen;
