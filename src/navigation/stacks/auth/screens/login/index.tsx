import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from './types';
import { Headline, Paragraph } from '@/components/atoms';
import { useTranslate } from '@/hooks';
import styles from './styles';

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { locale } = useTranslate();

  const handleNavigateToApp = () => {
    navigation.navigate('App');
  };

  return (
    <View style={styles.container.base}>
      <Headline text="Login Screen" weight="Bold" testId="login-title" />
      <Paragraph text="Welcome to the login screen!" testId="login-subtitle" />

      <View style={styles.buttonContainer.base}>
        <Pressable style={styles.button.base} onPress={handleNavigateToApp}>
          <Text style={styles.buttonText.base}>Login & Go to App</Text>
        </Pressable>
      </View>

      <Text style={styles.localeText.base}>Current Language: {locale}</Text>
    </View>
  );
};

export default LoginScreen;
