import { View } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import ProfileSettingItem from '../partials/profile-setting-item';
import { log } from '@/utilities';
import { ProfileSettingItemDataType } from '../partials/profile-setting-item/interface';
import { List } from '@/components/molecules';
import { useNavigation } from '@/hooks';
import { PageHeaderVariants } from '@/components/templates/page/constants';

const MyProfile = () => {
  const screenTestId = 'my-profile-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const { navigateTo } = useNavigation();

  const renderListItem = ({
    item,
  }: {
    item: ProfileSettingItemDataType;
    index: number;
  }) => {
    return (
      <ProfileSettingItem
        iconProps={item.iconProps}
        textProps={{
          text: item.title,
          weight: 'Semibold',
          size: '2xs',
        }}
        testId={screenTestId}
        onPress={item.onPress}
      />
    );
  };

  const data: ProfileSettingItemDataType[] = [
    {
      id: '1',
      title: 'profile.personal-details',
      iconProps: {
        name: 'User',
        containerStyle: themedStyles.iconDescriptiveYellow,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => navigateTo('PersonDetails'),
    },
    {
      id: '2',
      title: 'profile.job-details',
      iconProps: {
        name: 'Building2',
        containerStyle: themedStyles.iconDescriptiveGreen,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => navigateTo('BusinessDetails'),
    },
    {
      id: '3',
      title: 'profile.career-history',
      iconProps: {
        name: 'CalendarClock',
        containerStyle: themedStyles.iconDescriptiveTeal,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => log('career history pressed'),
    },
    {
      id: '4',
      title: 'profile.holidays-record',
      iconProps: {
        name: 'TreePalm',
        containerStyle: themedStyles.iconDescriptiveOrange,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => log('Holidays Record pressed'),
    },
    {
      id: '5',
      title: 'profile.qualifications.qualificationsTitle',
      iconProps: {
        name: 'FileBadge2',
        containerStyle: themedStyles.iconDescriptiveBlue,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => navigateTo('Qualifications'),
    },
    {
      id: '6',
      title: 'profile.skills.mySkills',
      iconProps: {
        name: 'Medal',
        containerStyle: themedStyles.iconDescriptiveGreen,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => navigateTo('MySkills'),
    },
    {
      id: '7',
      title: 'profile.covenants.title',
      iconProps: {
        name: 'Vault',
        containerStyle: themedStyles.iconDescriptiveOrange,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => navigateTo('Covenant'),
    },
    {
      id: '8',
      title: 'TEMPORARY PAGE, REMOVE BEFORE PUSH',
      iconProps: {
        name: 'Timer',
        containerStyle: themedStyles.iconDescriptiveOrange,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => navigateTo('TEMP_PAGE'),
    },
  ];
  return (
    <Page
      testId={screenTestId}
      hasHeader={true}
      isLoading={false}
      pageHeaderVariant={PageHeaderVariants.BackWithTitle}
      pageHeaderProps={{
        titleProps: { text: 'profile.myProfile' },
        isTitleCentered: true,
      }}
      useInfoBackground={true}>
      <View style={themedStyles.container}>
        <List<ProfileSettingItemDataType>
          testId={screenTestId}
          data={data}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </Page>
  );
};

export default MyProfile;
