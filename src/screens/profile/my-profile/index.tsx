import { View } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import ListItem from '../partials/list-item';
import { log } from '@/utilities';
import { listItemDataType } from '../partials/list-item/interface';
import { List } from '@/components/molecules';

const MyProfile = () => {
  const screenTestId = 'my-profile-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const renderListItem = ({
    item,
  }: {
    item: listItemDataType;
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

  const data: listItemDataType[] = [
    {
      id: '1',
      title: 'profile.personal-details',
      iconProps: {
        name: 'User',
        bgColor: 'iconDescriptiveYellow',
      },
      onPress: () => log('Personal Account pressed'),
    },
    {
      id: '2',
      title: 'profile.job-details',
      iconProps: {
        name: 'Building2',
        bgColor: 'iconDescriptiveGreen',
      },
      onPress: () => log('job pressed'),
    },
    {
      id: '3',
      title: 'profile.career-history',
      iconProps: {
        name: 'CalendarClock',
        bgColor: 'iconDescriptiveTeal',
      },
      onPress: () => log('career history pressed'),
    },
    {
      id: '4',
      title: 'profile.holidays-record',
      iconProps: {
        name: 'TreePalm',
        bgColor: 'iconDescriptiveOrange',
      },
      onPress: () => log('Holidays Record pressed'),
    },
    {
      id: '5',
      title: 'profile.qualifications',
      iconProps: {
        name: 'FileBadge2',
        bgColor: 'iconDescriptiveBlue',
      },
      onPress: () => log('qualifications pressed'),
    },
    {
      id: '6',
      title: 'profile.skills',
      iconProps: {
        name: 'Medal',
        bgColor: 'iconDescriptiveGreen',
      },
      onPress: () => log('skills pressed'),
    },
    {
      id: '7',
      title: 'profile.custodies',
      iconProps: {
        name: 'Vault',
        bgColor: 'iconDescriptiveOrange',
      },
      onPress: () => log('custodies pressed'),
    },
  ];
  return (
    <Page testId={screenTestId} hasHeader={false} isLoading={false}>
      <View style={themedStyles.container}>
        <List<listItemDataType>
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
