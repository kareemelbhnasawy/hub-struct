import { View } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import ProfileSettingItem from '../partials/profile-setting-item';
import { log } from '@/utilities';
import { ProfileSettingItemDataType } from '../partials/profile-setting-item/interface';
import { List } from '@/components/molecules';
import { useNavigation } from '@/hooks';

const MyProfile = () => {
  const screenTestId = 'my-profile-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const { navigate } = useNavigation();

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
      onPress: () => navigate('PersonDetails', {}),
    },
    {
      id: '2',
      title: 'profile.job-details',
      iconProps: {
        name: 'Building2',
        containerStyle: themedStyles.iconDescriptiveGreen,
      },
      onPress: () => log('job pressed'),
    },
    {
      id: '3',
      title: 'profile.career-history',
      iconProps: {
        name: 'CalendarClock',
        containerStyle: themedStyles.iconDescriptiveTeal,
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
      onPress: () => log('Holidays Record pressed'),
    },
    {
      id: '5',
      title: 'profile.qualifications',
      iconProps: {
        name: 'FileBadge2',
        containerStyle: themedStyles.iconDescriptiveBlue,
      },
      onPress: () => log('qualifications pressed'),
    },
    {
      id: '6',
      title: 'profile.skills',
      iconProps: {
        name: 'Medal',
        containerStyle: themedStyles.iconDescriptiveGreen,
      },
      onPress: () => log('skills pressed'),
    },
    {
      id: '7',
      title: 'profile.custodies',
      iconProps: {
        name: 'Vault',
        containerStyle: themedStyles.iconDescriptiveOrange,
      },
      onPress: () => navigate('EditBackground'),
    },
  ];
  return (
    <Page testId={screenTestId} hasHeader={false} isLoading={false}>
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
