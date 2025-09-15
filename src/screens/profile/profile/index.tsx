import { View } from 'react-native';
import { Spacer } from '@/components/atoms';
import styles from './styles';
import Page from '@/components/templates/page';
import { List } from '@/components/molecules';
import { useThemeStore } from '@/store/theme';
import ListItem from '../partials/profile-setting-item';
import ProfileHeading from '../partials/profile-heading';
import { getString, log } from '@/utilities';
import { useNavigation } from '@/hooks';
import { ProfileSettingItemDataType } from '../partials/profile-setting-item/interface';
import useProfileHeader from '@/network/services/profile/profile-header/profile-header.hook';
import { useEffect } from 'react';
import { useProfileStore } from '@/store/profile';

const ProfileScreen = () => {
  const { navigateTo } = useNavigation();
  const {
    setAllProfileData,
    getFullName,
    avatarUrl,
    jobTitle,
    department,
    status,
    bannerId,
  } = useProfileStore();
  const { name, kunya } = getFullName();
  const displayTitle = `${jobTitle} - ${department}`;
  const displayName = kunya ? `${kunya} (${name})` : name;
  const screenTestId = 'profile-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const handleNavigateToAccountDetails = () => {
    navigateTo('MyProfile');
  };

  const listItemData: ProfileSettingItemDataType[] = [
    {
      id: '1',
      title: 'profile.account',
      iconProps: {
        name: 'User',
        containerStyle: themedStyles.iconDescriptiveYellow,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: handleNavigateToAccountDetails,
    },
    {
      id: '2',
      title: 'profile.digitalCard',
      iconProps: {
        name: 'IdCard',
        containerStyle: themedStyles.iconDescriptiveGreen,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => navigateTo('DigitalCard'),
    },
    {
      id: '3',
      title: 'profile.team',
      iconProps: {
        name: 'Users',
        containerStyle: themedStyles.iconDescriptiveOrange,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => navigateTo('MyTeam'),
    },
    {
      id: '4',
      title: 'profile.personalize',
      iconProps: {
        name: 'HousePlus',
        containerStyle: themedStyles.iconDescriptiveTeal,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => log('Personalize Account pressed'),
    },
    {
      id: '5',
      title: 'profile.settings.settings',
      iconProps: {
        name: 'Settings',
        containerStyle: themedStyles.iconDescriptiveBlue,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => navigateTo('ProfileSettings'),
    },
    {
      id: '6',
      title: 'profile.skills.mySkills',
      iconProps: {
        name: 'Medal',
        containerStyle: themedStyles.iconDescriptiveBlue,
      },
      textProps: {
        weight: 'Semibold',
        size: '2xs',
      },
      onPress: () => navigateTo('MySkills'),
    },
  ];
  const renderListItem = ({
    item,
  }: {
    item: ProfileSettingItemDataType;
    index: number;
  }) => {
    return (
      <ListItem
        iconProps={item.iconProps}
        textProps={{
          text: item.title,
        }}
        testId={screenTestId}
        onPress={item.onPress}
      />
    );
  };

  const { data, isSuccess, isLoading } = useProfileHeader();

  useEffect(() => {
    if (isSuccess) {
      setAllProfileData({
        name: data?.name,
        kunya: data?.nickname,
        avatarUrl: data?.profileImage,
        bannerId: data?.banner,
        status: data?.status.toLowerCase(),
        department: data?.department,
        jobTitle: data?.jobTitle,
      });
    }
  }, [data, isSuccess, setAllProfileData]);

  /**
   * this code will be kept for documentation purposes
   * on how to check a notification that came while
   * the app was closed or in a background state.
   */
  useEffect(() => {
    const fcmNotification = getString('FCM_NOTIFICATION');
    // eslint-disable-next-line no-console
    console.log('fcm notification storage?: ', fcmNotification);
  }, []);

  return (
    <Page
      testId={screenTestId}
      hasHeader={false}
      isLoading={isLoading}
      disableSafeAreaTop={true}
      useInfoBackground={true}>
      <View style={themedStyles.container}>
        <ProfileHeading
          testId={screenTestId}
          bannerId={bannerId}
          avatarUrl={avatarUrl}
          name={name}
          displayName={displayName}
          displayTitle={displayTitle}
          status={status}
        />
        <Spacer space={15} />

        <List<ProfileSettingItemDataType>
          testId={screenTestId}
          data={listItemData}
          renderItem={renderListItem}
          keyField="title"
          scrollEnabled={false}
        />
      </View>
    </Page>
  );
};

export default ProfileScreen;
