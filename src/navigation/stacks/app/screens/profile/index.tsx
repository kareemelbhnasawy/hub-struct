import { View, Text, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Headline, Paragraph } from '@/components/atoms';
import { useTranslate } from '@/hooks';
import { AppStackParamList } from '../../types';
import styles from './styles';
import { ProfileScreenParams } from './types';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Profile'
>;

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const route = useRoute();
  const { userId = '12345' } = (route.params as ProfileScreenParams) || {};
  const { locale } = useTranslate();

  const handleGoBackToHome = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container.base}>
      <Headline text="Profile Screen" weight="Bold" testId="profile-title" />
      <Paragraph text="This is your profile page!" testId="profile-subtitle" />

      <View style={styles.content.base}>
        <Text style={styles.infoText.base}>User ID: {userId}</Text>
        <Text style={styles.infoText.base}>Email: user@example.com</Text>
        <Text style={styles.infoText.base}>Current Language: {locale}</Text>
      </View>

      <View style={styles.buttonContainer.base}>
        <Pressable style={styles.button.base} onPress={handleGoBackToHome}>
          <Text style={styles.buttonText.base}>Back to Home</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;
