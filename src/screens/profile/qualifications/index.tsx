import { View } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { List } from '@/components/molecules';
import { useThemeStore } from '@/store/theme';
import { useNavigation } from '@/hooks';
import { QualificationItemDataType } from '../partials/qualification-item/interface';
import QualificationItem from '../partials/qualification-item';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import useGetQualifications from '@/network/services/profile/get-qualifications/get-qualifications.hook';
import { useEffect, useState } from 'react';
import { QualificationResponseObject } from './interface';

const QualificationsScreen = () => {
  const navigation = useNavigation();
  const screenTestId = 'qualifications-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [qualifications, setQualifications] = useState<QualificationItemDataType[]>([]);

  const handleNavigateToAccountDetails = () => {
    navigation.navigate('MyProfile', {});
  };

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
  const { data, isSuccess, isLoading } = useGetQualifications();

useEffect(() => {
  if (isSuccess && data) {
    const tempQualifications = data.qualifications?.map((qualification: QualificationResponseObject) => ({
      id: qualification.id,
      qualificationName: qualification.qualificationName,
      institutionText: qualification.issuingAuthority,
      dateText: `${qualification.startDate} - ${qualification.endDate}`,
      status: 'completed',
      onPress: handleNavigateToAccountDetails,
    }));
    setQualifications(tempQualifications);
  }
}, [isSuccess, data]);

  return (
    <Page
      testId={screenTestId}
      pageHeaderVariant={PageHeaderVariants.BackWithTitle}
      pageHeaderProps={{
        titleProps: { text: 'profile.qualifications.qualificationsTitle' },
        isTitleCentered: true,
      }}
      hasHeader
      isLoading={isLoading}
      disableSafeAreaTop={true}>
      <View style={themedStyles.container}>
        <List<QualificationItemDataType>
          data={qualifications}
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
