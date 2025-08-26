/* eslint-disable */
import { Pressable, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@/hooks';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToProfile = () => {
    // navigation.navigate('Profile', { userId: '123' });
    navigation.navigateToOTP({
      nextScreen: 'Profile',
      mobile: '01220293563',
      nextScreenParams: { userId: '123' },
      body: {},
      url: 'auth/v1/home',
      expiresIn: 120,
      resetAppNav: false,
    });
  };

  return (
    <View style={styles.container.base}>
      <Text>This is Home</Text>

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
    </View>
  );
};

export default HomeScreen;
