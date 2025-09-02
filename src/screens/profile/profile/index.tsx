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
import { useEffect, useState } from 'react';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [bannerUrl, setBannerUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [kunya, setKunya] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [displayTitle, setDisplayTitle] = useState<string>('');
  const displayName = kunya ? `${kunya} (${name})` : name;
  const screenTestId = 'profile-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const handleNavigateToAccountDetails = () => {
    navigation.navigate('MyProfile');
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
      onPress: () => log('Work Account pressed'),
    },
    {
      id: '3',
      title: 'profile.team',
      iconProps: {
        name: 'Users',
        containerStyle: themedStyles.iconDescriptiveOrange,
      },
      onPress: () => log('Team Account pressed'),
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
      title: 'profile.settings',
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
      setName(data?.name);
      setKunya(data?.nickname);
      setAvatarUrl(data?.profileImage);
      setBannerUrl(data?.banner);
      setStatus(data?.status.toLowerCase());
      setDisplayTitle(`${data?.jobTitle} - ${data?.department}`);
    }
  }, [data, isSuccess]);

  return (
    <Page testId={screenTestId} hasHeader={false} isLoading={isLoading}>
      <View style={themedStyles.container}>
        <View>
          <CurvedHeroImage
            testId={screenTestId}
            source={bannerUrl ? { uri: bannerUrl } : undefined}>
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
            text={displayName}
            weight="Bold"
            size="xs"
            testId={screenTestId}
          />
          <Paragraph
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
