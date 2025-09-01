import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import { GlassContainer } from '@/components/atoms/glass-container';
import { DescriptiveIcon, List } from '@/components/molecules';
import { Page } from '@/components/templates';
import { useNavigation, useTranslate } from '@/hooks';
import { View } from 'react-native';
import { styles } from './styles';
import useGetPersonDetails from '@/network/services/profile/get-person-details/get-person-details.hook';
import { InfoItem, PersonDetailsResponse } from './interface';
import { useThemeStore } from '@/store/theme';
import { basicInfoDataHandler, contactInfoDataHandler } from './constants';

const PersonDetails = () => {
    const { getThemeColor } = useThemeStore();
    const screenTestId = 'person-details-screen';
    const { isRTL } = useTranslate();
    const { goBack } = useNavigation();

    // fetch data
    const { data } = useGetPersonDetails() as { data: PersonDetailsResponse | undefined, isLoading: boolean };

    const basicInfoData = basicInfoDataHandler(data);

    const contactInfoData = contactInfoDataHandler(data);

    const renderBasicInfoItem = ({ item }: { item: InfoItem }) => (
        <View style={styles.info.base}>
            <Paragraph text={item.label} size="md" weight="Medium" testId={`basic-${item.key}-label`} />
            <Paragraph text={item.value} weight="Medium" testId={`basic-${item.key}-value`} />
        </View>
    );

    const renderContactInfoItem = ({ item }: { item: InfoItem }) => (
        <View style={styles.info.base}>
            <Paragraph text={item.label} size="md" weight="Medium" testId={`contact-${item.key}-label`} />
            <Paragraph text={item.value} weight="Medium" testId={`contact-${item.key}-value`} />
        </View>
    );
    return (
        <Page testId={screenTestId} hasHeader={false}>
            <Spacer space={22} />
            <View style={[styles.headerContainer.base, styles.justifyContent.base]}>
                <GlassContainer testId="back-icon" containerStyle={styles.backIcon.base}>
                    <LucideIcon
                        name={isRTL ? 'ChevronRight' : 'ChevronLeft'}
                        testId="back"
                        onPress={goBack}
                    />
                </GlassContainer>
                <Headline testId={`${screenTestId}-header-title`} text="personDetails.personalInfo" size="md" weight="Semibold" />
            </View>
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
            <View >
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
            <View >
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
