/* eslint-disable */
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@/hooks';
import TeamMemberItemDemo from '../partials/team-member-item/demo';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleNavigateToProfile = () => {
    navigation.navigate('ProfileStack', { userId: '123' });
  };

  return (
    <View style={styles.container.base}>
      <Text>This is Home</Text>

      <Pressable
        onPress={handleNavigateToProfile}
        style={styles.profileButton.base}>
        <Text style={styles.profileButtonText.base}>Go to Profile</Text>
      </Pressable>
      <TeamMemberItemDemo />
    </View>
  );
};

export default HomeScreen;
