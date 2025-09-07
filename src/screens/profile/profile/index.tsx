import { View } from 'react-native';
import {
  CurvedHeroImage,
  Headline,
  Paragraph,
  Spacer,
} from '@/components/atoms';
import styles from './styles';
import Page from '@/components/templates/page';
import { Avatar, List } from '@/components/molecules';
import { useThemeStore } from '@/store/theme';
import ListItem from '../partials/profile-setting-item';
import { log } from '@/utilities';
import { useNavigation } from '@/hooks';
import { ProfileSettingItemDataType } from '../partials/profile-setting-item/interface';
import useProfileHeader from '@/network/services/profile/profile-header/profile-header.hook';
import { useEffect } from 'react';
import { useProfileStore } from '@/store/profile';
import { getBackgroundImageById } from '../edit-background/constants';

const ProfileScreen = () => {
  const navigation = useNavigation();
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
    navigation.navigate('MyProfile', {});
  };

  const listItemData: ProfileSettingItemDataType[] = [
    {
      id: '1',
      title: 'profile.account',
      iconProps: {
        name: 'User',
        containerStyle: themedStyles.iconDescriptiveYellow,
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
      onPress: () => navigation.navigate('ProfileSettings'),
    },
    {
      id: '3',
      title: 'profile.team',
      iconProps: {
        name: 'Users',
        containerStyle: themedStyles.iconDescriptiveOrange,
      },
      onPress: () => log('My Team pressed'),
    },
    {
      id: '4',
      title: 'profile.personalize',
      iconProps: {
        name: 'HousePlus',
        containerStyle: themedStyles.iconDescriptiveTeal,
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
      onPress: () => navigation.navigate('ProfileSettings'),
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

  return (
    <Page
      testId={screenTestId}
      hasHeader={false}
      isLoading={isLoading}
      disableSafeAreaTop={true}>
      <View style={themedStyles.container}>
        <View>
          <CurvedHeroImage
            testId={screenTestId}
            source={getBackgroundImageById(bannerId)}
            hasBackButton={true}>
            <Avatar
              size="lg"
              image={avatarUrl ?? null}
              name={name}
              status={status}
              testId={screenTestId}
              containerStyle={themedStyles.avatar}
            />
          </CurvedHeroImage>
        </View>
        <Spacer />
        <View style={themedStyles.titleWrapper}>
          <Headline
            isTranslated={false}
            text={displayName}
            weight="Bold"
            size="xs"
            testId={screenTestId}
          />
          <Paragraph
            isTranslated={false}
            text={displayTitle}
            weight="Medium"
            size="lg"
            testId={screenTestId}
          />
        </View>
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
