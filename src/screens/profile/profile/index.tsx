import { View } from 'react-native';
import {
  CurvedHeroImage,
  Headline,
  Paragraph,
  Spacer,
} from '@/components/atoms';
import styles from './styles';
import Page from '@/components/templates/page';
import { Avatar } from '@/components/molecules';
import defaultAvatar from '@/assets/images/HRSD-Logo.png';
import { useThemeStore } from '@/store/theme';
import ListItem from '../partials/list-item';
import { log } from '@/utilities';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@/hooks/use-navigation';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const name = 'محمد مصطفى';
  const kunya = 'أبو ألفطي';
  const displayName = kunya ? `${kunya} (${name})` : name;
  const jobTitle = 'مهندس برمجيات';
  const screenTestId = 'profile-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const handleNavigateToAccountDetails = () => {
    navigation.navigate('PersonalAccount');
  };

  const data = [
    {
      id: '1',
      title: 'profile.account',
      iconProps: {
        name: 'User',
        bgColor: 'iconDescriptiveYellow',
      },
      onPress: handleNavigateToAccountDetails,
    },
    {
      id: '2',
      title: 'profile.digitalCard',
      iconProps: {
        name: 'IdCard',
        bgColor: 'iconDescriptiveGreen',
      },
      onPress: () => log('Work Account pressed'),
    },
    {
      id: '3',
      title: 'profile.team',
      iconProps: {
        name: 'Users',
        bgColor: 'iconDescriptiveOrange',
      },
      onPress: () => log('Team Account pressed'),
    },
    {
      id: '4',
      title: 'profile.personalize',
      iconProps: {
        name: 'HousePlus',
        bgColor: 'iconDescriptiveTeal',
      },
      onPress: () => log('Personalize Account pressed'),
    },
    {
      id: '5',
      title: 'profile.settings',
      iconProps: {
        name: 'Settings',
        bgColor: 'iconDescriptiveBlue',
      },
      onPress: () => log('Settings pressed'),
    },
  ];
  return (
    <Page testId={screenTestId} hasHeader={false} isLoading={false}>
      <View style={themedStyles.container}>
        <View>
          <CurvedHeroImage testId={screenTestId} style={themedStyles.banner}>
            <Avatar
              size="lg"
              image={defaultAvatar}
              status="offline"
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
            text={jobTitle}
            weight="Medium"
            size="lg"
            testId={screenTestId}
          />
        </View>
        <Spacer space={15} />
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
        {/* <List
          data={[
            { id: '1', title: 'Item 1' },
            { id: '2', title: 'Item 2' },
            { id: '3', title: 'Item 3' },
          ]}
          renderItem={({ item }) => (
            <List.Item
              title={item.title}
              onPress={() => console.log(item.id)}
            />
          )}
          testId={screenTestId}
        /> */}
      </View>
    </Page>
  );
};

export default ProfileScreen;
