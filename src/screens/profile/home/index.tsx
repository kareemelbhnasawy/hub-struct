/* eslint-disable */
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import TeamMemberItemDemo from '../partials/team-member-item/demo';
import { useNavigation, useTranslate } from '@/hooks';

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
    </View>
  );
};

export default HomeScreen;
