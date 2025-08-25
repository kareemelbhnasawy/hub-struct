/* eslint-disable */
import { Pressable, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@/hooks';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToProfile = () => {
    navigation.navigate('Profile', { userId: '123' });
  };

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
