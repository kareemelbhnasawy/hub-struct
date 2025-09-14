/* eslint-disable */
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { useNavigation, useTranslate } from '@/hooks';
import { ToastService } from '@/components/molecules';
import logUserAction from '@/utilities/log-user-action';

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
  const { changeLanguage, locale, isRTL } = useTranslate();
  console.log(locale);

  // changeLanguage('ar');
  return (
    <View style={styles.container.base}>
      <Text>This is Home</Text>

      <Pressable
        onPress={handleNavigateToProfile}
        style={styles.profileButton.base}>
        <Text style={styles.profileButtonText.base}>Go to Profile</Text>
      </Pressable>

      <Pressable
        onPress={async () => {
          logUserAction('CustomProfileEvent', {
            key1: 'value 1',
            key2: 'value22',
          }).then((val) => console.log('logged!', val));
        }}>
        <Text style={styles.profileButtonText.base}>SEND CUSTOM EVENT!</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
