import { useThemeStore } from '@/store/theme';
import styles from './styles';
import Page from '@/components/templates/page';
import { Image, View } from 'react-native';
import { List, DescriptiveIcon } from '@/components/molecules';
import { InfoItem, QualificationDetailsResponse, Attachment } from './interface';
import pdfIcon from '@/assets/images/pdf.png';
import { Headline, Paragraph, Spacer } from '@/components/atoms';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { basicInfoDataHandler, feesDataHandler, studyDetailsDataHandler } from './constants';
import useGetQualificationDetails from '@/network/services/profile/get-qualification-details/get-qualification-details.hook';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '@/navigation/stacks/profile/types';
type Props = NativeStackScreenProps<ProfileStackParamList, 'QualificationDetails'>;

const QualificationDetails = ({ route }: Props) => {

    const { getThemedStyles } = useThemeStore();
    const screenTestId = 'qualification-details-screen';
    const themedStyle = getThemedStyles(styles);
    // fetch data
    const { data, isLoading } = useGetQualificationDetails(route.params.qualificationId?.toString() || '');
    const qualificationData = data as QualificationDetailsResponse;
    const basicInfoData = basicInfoDataHandler(qualificationData);
    const studyDetailsData = studyDetailsDataHandler(qualificationData);
    const feesData = feesDataHandler(qualificationData);

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
            hasHeader
            pageHeaderVariant={PageHeaderVariants.BackWithTitle}
            pageHeaderProps={{
                titleProps: { text: 'profile.qualificationDetails.qualificationDetails' },
                isTitleCentered: true,
            }}>
            <Spacer space={'xl'} />

            {/* Card: Basic information */}
            <DescriptiveIcon
                testId={`${screenTestId}-basic-info`}
                iconProps={{
                    name: 'GraduationCap',
                    size: 20,
                    isCircle: true,
                    containerStyle: themedStyle.iconDescriptiveGreen,
                }}
                textProps={{
                    text: 'profile.qualificationDetails.basicQualificationInfo',
                    size: 'xs',
                    weight: 'Bold',
                }}
            />
            <Spacer space={'xl'} />
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

            <Spacer space={32} />

            {/* Card: Study Details information */}
            <DescriptiveIcon
                testId={`${screenTestId}-study-details-icon`}
                iconProps={{
                    name: 'BookText',
                    size: 20,
                    isCircle: true,
                    containerStyle: themedStyle.iconDescriptiveOrange,
                }}
                textProps={{
                    text: 'profile.qualificationDetails.studyDetails',
                    size: 'xs',
                    weight: 'Bold',
                }}
            />
            <Spacer space={'xl'} />
            <View>
                <List<InfoItem>
                    testId={`${screenTestId}-contact-info-list`}
                    data={studyDetailsData}
                    keyField="key"
                    renderItem={renderBasicInfoItem}
                    scrollEnabled={false}
                    spacerProps={{ isDivider: true, space: 0 }}
                />
            </View>

            <Spacer space={32} />

            {/* Card: Fees information */}
            <DescriptiveIcon
                testId={`${screenTestId}-fees`}
                iconProps={{
                    name: 'SaudiRiyal',
                    size: 20,
                    isCircle: true,
                    containerStyle: themedStyle.iconDescriptiveTeal,
                }}
                textProps={{
                    text: 'profile.qualificationDetails.fees',
                    size: 'xs',
                    weight: 'Bold',
                }}
            />
            <Spacer space={'xl'} />
            <View>
                <List<InfoItem>
                    testId={`${screenTestId}-fees-list`}
                    data={feesData}
                    keyField="key"
                    renderItem={renderBasicInfoItem}
                    scrollEnabled={false}
                    spacerProps={{ isDivider: true, space: 0 }}
                />
            </View>

            <Spacer space={32} />

            {/* Card: Notes & Attachments information */}
            <DescriptiveIcon
                testId={`${screenTestId}-notes-attachments`}
                iconProps={{
                    name: 'NotebookPen',
                    size: 20,
                    isCircle: true,
                    containerStyle: themedStyle.iconDescriptiveOrange,
                }}
                textProps={{
                    text: 'profile.qualificationDetails.notesAttachments',
                    size: 'xs',
                    weight: 'Bold',
                }}
            />
            <Spacer space={'xl'} />

            <View>
                <Paragraph
                    testId={`${screenTestId}-comments-title`}
                    text="profile.qualificationDetails.commentsToApprover"
                    size="xl"
                    weight="Medium"
                    style={themedStyle.mutedTitle}
                />
                <Spacer space="xs" />

                <Headline
                    testId={`${screenTestId}-comments-body`}
                    size="xs"
                    weight='Medium'
                    text={qualificationData?.notes || 'profile.emptyDataMsg'}
                />

                <Spacer space="xl" />

                <Paragraph
                    testId={`${screenTestId}-attachments-title`}
                    text="profile.qualificationDetails.attachments"
                    size="xl"
                    weight="Medium"
                    style={themedStyle.mutedTitle}
                />
                <Spacer space={'sm'} />

                {qualificationData?.attachments?.map((attachment: Attachment, index: number) => (
                    <>
                        <View key={index} style={themedStyle.container}>
                            <Image
                                source={pdfIcon}
                                style={themedStyle.pdfImg}
                                resizeMode="contain"
                            />
                            <Headline
                                testId={`${screenTestId}-attachments-headline-${index}`}
                                text={attachment.fileName || 'profile.emptyDataMsg'}
                                size="2xs"
                                weight="Medium"
                            />
                        </View>
                        <Spacer space={'xl'} isDivider />
                    </>

                ))}

            </View>
        </Page>
    );
};

export default QualificationDetails;