import { View, Text, Pressable } from 'react-native';
import { Headline, Paragraph } from '@/components/atoms';
import { useNavigation, useTranslate } from '@/hooks';
import styles from './styles';

const ProfileScreen = () => {
  const nav = useNavigation<'Profile'>(); // TRoute is 'Profile'
  const { userId } = nav.params; // strongly typed
  const { locale } = useTranslate();

  const handleGoBackToHome = () => {
    nav.goBack();
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
        <Pressable
          style={styles.button.base}
          onPress={() => nav.navigateTo('QuickLogin')}>
          <Text style={styles.buttonText.base}>Go to Quick Login</Text>
        </Pressable>
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
