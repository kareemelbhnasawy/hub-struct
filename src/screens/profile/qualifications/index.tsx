import { View } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { List } from '@/components/molecules';
import { useThemeStore } from '@/store/theme';
import { useNavigation } from '@/hooks';
import { QualificationItemDataType } from '../partials/qualification-item/interface';
import QualificationItem from '../partials/qualification-item';
import { PageHeaderVariants } from '@/components/templates/page/constants';

const QualificationsScreen = () => {
  const navigation = useNavigation();
  const screenTestId = 'qualifications-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const handleNavigateToAccountDetails = () => {
    navigation.navigate('MyProfile', {});
  };

  const qualificationItemData: QualificationItemDataType[] = [
    {
      id: '1',
      qualificationName: 'Bachelor Degree',
      institutionText: 'German University in Cairo',
      dateText: '2019 - 2024',
      status: 'completed',
      onPress: handleNavigateToAccountDetails,
    },
    {
      id: '2',
      qualificationName: 'Master Degree',
      institutionText: 'American University in Cairo',
      dateText: '2024 - 2026',
      status: 'in-progress',
      onPress: handleNavigateToAccountDetails,
    },
    {
      id: '3',
      qualificationName: 'PhD Degree',
      institutionText: 'Harvard University',
      dateText: '2026 - 2030',
      status: 'completed',
      onPress: handleNavigateToAccountDetails,
    },
  ];

  const renderListItem = ({
    item,
  }: {
    item: QualificationItemDataType;
    index: number;
  }) => {
    return (
      <QualificationItem
        testId={screenTestId}
        qualificationName={item.qualificationName}
        institutionText={item.institutionText}
        dateText={item.dateText}
        status={item.status}
        onPress={item.onPress}
      />
    );
  };

  return (
    <Page
      testId={screenTestId}
      pageHeaderVariant={PageHeaderVariants.BackWithTitle}
      pageHeaderProps={{
        titleProps: { text: 'profile.qualifications.qualificationsTitle' },
        isTitleCentered: true,
      }}
      hasHeader
      isLoading={false}
      disableSafeAreaTop={true}>
      <View style={themedStyles.container}>
        <List<QualificationItemDataType>
          data={qualificationItemData}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
          testId={screenTestId}
          scrollEnabled={false}
          emptyComponentProps={{
            iconProps: {
              name: 'GraduationCap',
              color: 'foregroundSecondary',
              size: 100,
            },
            headlineProps: {
              text: 'profile.qualifications.noQualificationsTitle',
              size: 'xs',
              weight: 'Semibold',
            },
            paragraphProps: {
              text: 'profile.qualifications.noQualificationsSubtitle',
              size: 'xl',
              weight: 'Regular',
            },
          }}
        />
      </View>
    </Page>
  );
};

export default QualificationsScreen;
