import { Headline, Paragraph, Spacer } from '@/components/atoms';
import { Page } from '@/components/templates';
import { View } from 'react-native';
import styles from './styles';
import useGetPersonDetails from '@/network/services/profile/get-person-details/get-person-details.hook';
import { InfoItem, PersonDetailsResponse } from './interface';
import { useThemeStore } from '@/store/theme';
import { basicInfoDataHandler, contactInfoDataHandler } from './constants';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { BusinessDetailsSection } from '../partials';

const BusinessDetails = () => {
  const { getThemedStyles } = useThemeStore();
  const screenTestId = 'person-details-screen';
  const themedStyle = getThemedStyles(styles);
  // fetch data
  const { data, isLoading } = useGetPersonDetails() as {
    data: PersonDetailsResponse | undefined;
    isLoading: boolean;
  };
  const basicInfoData = basicInfoDataHandler(data);

  const contactInfoData = contactInfoDataHandler(data);

  const latitude = data?.coordinates?.latitude
    ? Number(data.coordinates.latitude)
    : undefined;
  const longitude = data?.coordinates?.longitude
    ? Number(data.coordinates.longitude)
    : undefined;

  const renderBasicInfoItem = ({ item }: { item: InfoItem }) => (
    <View style={themedStyle.info}>
      <Paragraph
        text={item.label}
        size="xl"
        weight="Medium"
        testId={`basic-${item.key}-label`}
      />
      <Headline
        text={item.value}
        weight="Medium"
        size="2xs"
        testId={`basic-${item.key}-value`}
      />
    </View>
  );

  return (
    <Page
      testId={screenTestId}
      isLoading={isLoading}
      noPaddings
      hasHeader
      pageHeaderVariant={PageHeaderVariants.BackWithTitle}
      pageHeaderProps={{
        titleProps: { text: 'profile.job-details' },
        isTitleCentered: true,
      }}>
      <Spacer space={8} />
      <BusinessDetailsSection
        testId={screenTestId}
        sections={[
          {
            key: 'basic-info',
            title: 'البيانات الوظيفية',
            icon: 'BriefcaseBusiness',
            iconContainerStyle: themedStyle.iconDescriptiveYellow,
            data: basicInfoData,
            renderItem: ({ item }) => renderBasicInfoItem({ item }),
          },
          {
            key: 'contact-info',
            title: 'بيانات التواصل',
            icon: 'Phone',
            iconContainerStyle: themedStyle.iconDescriptiveGreen,
            data: contactInfoData,
            renderItem: ({ item }) => renderBasicInfoItem({ item }),
          },
        ]}
        map={
          latitude &&
          longitude && {
            title: 'موقع العمل',
            icon: 'MapPin',
            iconContainerStyle: themedStyle.iconDescriptiveGreen,
            latitude,
            longitude,
            containerStyle: themedStyle.mapViewHeight,
          }
        }
      />
    </Page>
  );
};

export default BusinessDetails;
