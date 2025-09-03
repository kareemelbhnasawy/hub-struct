import { Headline, Paragraph, Spacer } from '@/components/atoms';
import { useNavigation } from '@/hooks';
import { Page } from '@/components/templates';
import { BaseButton } from '@/components/molecules';

const ProfileDetailsScreen = () => {
  const nav = useNavigation<'Profile'>(); // TRoute is 'Profile'
  const screenTestId = 'profile-screen';

  return (
    <Page testId={screenTestId}>
      <Headline text="Profile Screen" weight="Bold" testId="profile-title" />
      <Paragraph text="This is your profile page!" testId="profile-subtitle" />

      <Spacer />
      <BaseButton
        testId={''}
        textProps={{ text: 'Go to Quick Login' }}
        onPress={() => nav.navigateTo('QuickLogin')}
      />
      <Spacer />
      <Spacer />
    </Page>
  );
};

export default ProfileDetailsScreen;
