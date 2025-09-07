import { Headline, MapWebView, Paragraph, Spacer } from '@/components/atoms';
import { DescriptiveIcon, List } from '@/components/molecules';
import { Page } from '@/components/templates';
import { View } from 'react-native';
import styles from './styles';
import useGetPersonDetails from '@/network/services/profile/get-person-details/get-person-details.hook';
import { InfoItem, PersonDetailsResponse } from './interface';
import { useThemeStore } from '@/store/theme';
import { basicInfoDataHandler, contactInfoDataHandler } from './constants';
import { PageHeaderVariants } from '@/components/templates/page/constants';

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
      <View style={themedStyle.pagePadding}>
        <Spacer space={'xl'} />
        <DescriptiveIcon
          testId={`${screenTestId}-basic-info`}
          iconProps={{
            name: 'BriefcaseBusiness',
            size: 18,
            isCircle: true,
            containerStyle: themedStyle.iconDescriptiveYellow,
          }}
          textProps={{
            text: 'البيانات الوظيفية',
            size: '2xs',
            weight: 'Bold',
          }}
        />
        <Spacer space={'xl'} />
        {/* Card: Basic information */}
        <List<InfoItem>
          testId={`${screenTestId}-basic-info-list`}
          data={basicInfoData}
          keyField="key"
          renderItem={renderBasicInfoItem}
          scrollEnabled={false}
          spacerProps={{ isDivider: true, space: 0 }}
        />
        <Spacer space={'4xl'} />
        <DescriptiveIcon
          testId={`${screenTestId}-contact-info`}
          iconProps={{
            name: 'Phone',
            size: 18,
            isCircle: true,
            containerStyle: themedStyle.iconDescriptiveGreen,
          }}
          textProps={{
            text: 'بيانات التواصل',
            size: '2xs',
            weight: 'Bold',
          }}
        />
        <Spacer space={'xl'} />
        {/* Card: Contact information */}
        <List<InfoItem>
          testId={`${screenTestId}-contact-info-list`}
          data={contactInfoData}
          keyField="key"
          renderItem={renderBasicInfoItem}
          scrollEnabled={false}
          spacerProps={{ isDivider: true, space: 0 }}
        />
        <Spacer space={'4xl'} />
        <DescriptiveIcon
          testId={`${screenTestId}-contact-info`}
          iconProps={{
            name: 'MapPin',
            size: 18,
            isCircle: true,
            containerStyle: themedStyle.iconDescriptiveGreen,
          }}
          textProps={{
            text: 'موقع العمل',
            size: '2xs',
            weight: 'Bold',
          }}
        />
        <Spacer space={'xl'} />
      </View>
      <MapWebView
        testId={screenTestId}
        latitude={30.0444}
        longitude={31.2357}
        containerStyle={themedStyle.mapViewHeight}
      />
    </Page>
  );
};

export default BusinessDetails;
