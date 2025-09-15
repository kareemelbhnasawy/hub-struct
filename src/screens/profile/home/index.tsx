import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { useNavigation, useTranslate } from '@/hooks';
import { ToastService } from '@/components/molecules';

const HomeScreen = () => {
  const { navigateTo } = useNavigation();
  const handleNavigateToProfile = () => {
    ToastService.info({
      props: {
        messageProps: { text: 'Language is ' + locale + ' isRTL is ' + isRTL },
        testId: '',
      },
    });
    navigateTo('ProfileStack', { userId: '123' });
  };
  const { locale, isRTL } = useTranslate();

  // changeLanguage('ar');
  return (
    <View style={styles.container.base}>
      <Text>This is Home</Text>

      <Pressable
        onPress={handleNavigateToProfile}
        style={styles.profileButton.base}>
        <Text style={styles.profileButtonText.base}>Go to Profile</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
