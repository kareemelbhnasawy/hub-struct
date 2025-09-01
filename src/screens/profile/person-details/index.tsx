import { LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import { DescriptiveIcon, List } from '@/components/molecules';
import { Page } from '@/components/templates';
import { Pressable, View } from 'react-native';
import styles from './styles';
import useGetPersonDetails from '@/network/services/profile/get-person-details/get-person-details.hook';
import { InfoItem, PersonDetailsResponse } from './interface';
import { useThemeStore } from '@/store/theme';
import { basicInfoDataHandler, contactInfoDataHandler } from './constants';
import { PageHeaderVariants } from '@/components/templates/page/constants';

const PersonDetails = () => {
  const { getThemeColor, getThemedStyles } = useThemeStore();
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
    <View style={styles.info.base}>
      <Paragraph
        text={item.label}
        size="md"
        weight="Medium"
        testId={`basic-${item.key}-label`}
      />
      <Paragraph
        text={item.value}
        weight="Medium"
        testId={`basic-${item.key}-value`}
      />
    </View>
  );

  const renderContactInfoItem = ({ item }: { item: InfoItem }) => (
    <Pressable style={themedStyle.info}>
      <Paragraph
        text={item.label}
        size="md"
        weight="Medium"
        testId={`contact-${item.key}-label`}
      />
      <View style={themedStyle.row}>
        <Paragraph
          text={item.value}
          weight="Medium"
          testId={`contact-${item.key}-value`}
        />
        <LucideIcon
          name="ChevronRight"
          isRTLMirrored
          size={16}
          testId={`contact-${item.key}-chevron`}
        />
      </View>
    </Pressable>
  );
  return (
    <Page
      testId={screenTestId}
      isLoading={isLoading}
      hasHeader
      pageHeaderVariant={PageHeaderVariants.BackWithTitle}
      pageHeaderProps={{
        titleProps: { text: 'personDetails.personalInfo' },
        isTitleCentered: true,
      }}>
      <Spacer space={'xl'} />
      <DescriptiveIcon
        testId={`${screenTestId}-basic-info`}
        iconProps={{
          name: 'User',
          size: 18,
          isCircle: true,
          containerStyle: {
            backgroundColor: getThemeColor('iconDescriptiveYellow'),
          },
        }}
        textProps={{
          text: 'personDetails.basicInfo',
          size: '2xs',
          weight: 'Bold',
        }}
      />
      <Spacer space={'xl'} />
      {/* Card: Basic information */}
      <View>
        <List<InfoItem>
          testId={`${screenTestId}-basic-info-list`}
          data={basicInfoData}
          keyField="key"
          renderItem={renderBasicInfoItem}
          scrollEnabled={false}
          spacerProps={{ isDivider: true, space: 0 }}
        />
      </View>
      <Spacer space={'4xl'} />
      <DescriptiveIcon
        testId={`${screenTestId}-contact-info`}
        iconProps={{
          name: 'Phone',
          size: 18,
          isCircle: true,
          containerStyle: {
            backgroundColor: getThemeColor('iconDescriptiveGreen'),
          },
        }}
        textProps={{
          text: 'personDetails.basicInfo',
          size: '2xs',
          weight: 'Bold',
        }}
      />
      <Spacer space={'xl'} />
      {/* Card: Contact information */}
      <View>
        <List<InfoItem>
          testId={`${screenTestId}-contact-info-list`}
          data={contactInfoData}
          keyField="key"
          renderItem={renderContactInfoItem}
          scrollEnabled={false}
          spacerProps={{ isDivider: true, space: 0 }}
        />
      </View>
    </Page>
  );
};

export default PersonDetails;
