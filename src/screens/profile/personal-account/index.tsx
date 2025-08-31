import { View } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import ListItem from '../partials/list-item';
import { log } from '@/utilities';
import { FlatList } from 'react-native-gesture-handler';

const PersonalAccountScreen = () => {
  const screenTestId = 'personal-account-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const data = [
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
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <>
              <ListItem
                iconProps={item.iconProps}
                textProps={{
                  text: item.title,
                }}
                testId={screenTestId}
                onPress={item.onPress}
              />
              
            </>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Page>
  );
};

export default PersonalAccountScreen;
