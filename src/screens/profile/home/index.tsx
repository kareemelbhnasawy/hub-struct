/* eslint-disable */
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { useNavigation, useTranslate } from '@/hooks';
import { BaseButton } from '@/components/molecules';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import useLogout from '@/network/services/auth/logout/logout.hook';
import { useAuthStore } from '@/store/auth';
import { deleteKey } from '@/utilities';
import { useThemeStore } from '@/store/theme';

const HomeScreen = () => {
  const { theme } = useThemeStore();
  const navigation = useNavigation();
  const { getEmail } = useAuthStore();
  const handleNavigateToProfile = () => {
    navigation.navigate('ProfileStack', { userId: '123' });
  };
  const onLogoutSuccess = () => {
    deleteKey(STORAGE_KEYS.REFRESH_TOKEN);
    navigation.resetToStack('Auth', 'Login');
  };
  const { toggleLanguage } = useTranslate();
  // const { toggleTheme } = useThemeStore();

  const { mutate: logout } = useLogout(onLogoutSuccess);

  return (
    <View style={styles.container.base}>
      <Text>This is Home</Text>

      {/* <Pressable onPress={toggleTheme}>
        <Text style={styles.profileButtonText.base}>Toggle Theme</Text>
      </Pressable> */}
      <Pressable onPress={toggleLanguage}>
        <Text style={styles.profileButtonText.base}>Toggle Lang</Text>
      </Pressable>

      <Pressable
        onPress={handleNavigateToProfile}
        style={styles.profileButton.base}>
        <Text style={styles.profileButtonText.base}>Go to Profile</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.profileButton.base}>
        <Text style={styles.profileButtonText.base}>Go Back</Text>
      </Pressable>
      <BaseButton
        onPress={() => logout({ email: getEmail() })}
        variant="secondary"
        size="lg"
        textProps={{ text: 'Logout' }}
        leftIcon={{ name: 'LogOut' }}
        testId={'logout-button'}
      />
    </View>
  );
};

export default HomeScreen;
