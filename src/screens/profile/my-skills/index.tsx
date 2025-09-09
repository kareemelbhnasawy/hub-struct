import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { Page } from '@/components/templates';
import { View } from 'react-native';
import { BaseButton } from '@/components/molecules';

const MySkillsScreen = () => {
  const screenTestId = 'profile-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  return (
    <Page
      testId={screenTestId}
      hasHeader={false}
      isLoading={false}
      disableSafeAreaTop={true}>
      <View style={themedStyles.container}>
       <BaseButton textProps={{ text: 'My Skills Screen' }} onPress={() => {}} />
      </View>
    </Page>
  );
};

export default MySkillsScreen;
