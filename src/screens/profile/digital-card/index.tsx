import { Image, ImageBackground, Pressable, View } from 'react-native';
import { useThemeStore } from '@/store/theme';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import identityAnimation from '@/assets/animations/identity_verification_pending.json';
import Logo from '@/components/molecules/logo';
import { Page } from '@/components/templates';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { BaseModal, Headline, Paragraph, Spacer } from '@/components/atoms';
import { BaseButton } from '@/components/molecules';
import { useProfileStore } from '@/store/profile';
import useGetPersonDetails from '@/network/services/profile/get-person-details/get-person-details.hook';
import { useMemo, useState } from 'react';
import QRCode from 'react-native-qrcode-svg';
import DigitalCardCut from '@/assets/images/image-cuts/digital-card-cut.png';
import { useTranslate } from '@/hooks';
import useProfileHeader from '@/network/services/profile/profile-header/profile-header.hook';

const DigitalCardScreen = () => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const testId = 'digital-card-screen';
  const { jobTitle, name } = useProfileStore();
  const { isRTL, translate } = useTranslate();
  const { data, isPending } = useGetPersonDetails();
  const { data: headerData, isPending: isHeaderPending } = useProfileHeader();
  const [modalVisible, setModalVisible] = useState(false);

  const vcard = useMemo(() => {
    const lines = ['BEGIN:VCARD', 'VERSION:3.0'];
    if (data?.primaryInfo?.name) {
      lines.push(`N:;${data?.primaryInfo.name};;;`);
      lines.push(`FN:${data?.primaryInfo.name}`);
    }
    if (data?.primaryInfo?.birthDateGregorian) {
      const cleanDate = data?.primaryInfo.birthDateGregorian.replace(/-/g, '');
      lines.push(`BDAY:${cleanDate}`);
    }
    if (data?.primaryInfo?.gender) {
      lines.push(`GENDER:${data?.primaryInfo?.gender.substring(0, 1)}`);
    }
    if (headerData?.profileImage) {
      lines.push(`PHOTO;VALUE=URI:${headerData?.profileImage}`);
    }
    const notes = [];
    if (data?.jobInfo?.jobTitle) {
      lines.push(`TITLE:${data?.jobInfo?.jobTitle}`);
      notes.push(
        translate('profile.myJobDetails.jobTitle'),
        data?.jobInfo?.jobTitle,
      );
    }
    if (data?.jobInfo?.management) {
      lines.push(`ORG:${data?.jobInfo?.management}`);
      notes.push(
        translate('profile.myJobDetails.management'),
        data?.jobInfo?.management,
      );
    }
    if (data?.contactInfo?.workExtension) {
      lines.push(`Extension:${data?.contactInfo?.workExtension}`);
      notes.push(
        translate('profile.personDetails.extension'),
        data?.contactInfo?.workExtension,
      );
    }
    if (notes.length) {
      lines.push(`NOTE;CHARSET=UTF-8:${notes.join('\\n')}`);
    }
    if (data?.contactInfo?.mobileNumber) {
      lines.push(`TEL;TYPE=CELL:${data?.contactInfo?.mobileNumber}`);
    }
    if (data?.contactInfo?.emailAddress) {
      lines.push(`EMAIL;TYPE=WORK:${data?.contactInfo.emailAddress}`);
    }
    if (data?.contactInfo?.address) {
      lines.push(`ADR;TYPE=WORK:;;${data?.contactInfo.address};;;;`);
    }
    if (data?.coordinates?.latitude && data?.coordinates?.longitude) {
      lines.push(
        `GEO:${data?.coordinates.latitude};${data?.coordinates.longitude}`,
      );
    }
    lines.push('END:VCARD');
    return lines.join('\n');
  }, [data, translate]);

  return (
    <Page
      testId={`${testId}`}
      isLoading={isPending || isHeaderPending}
      pageHeaderVariant={PageHeaderVariants.BackWithTitle}
      pageHeaderProps={{
        titleProps: { text: 'profile.digitalCard' },
        isTitleCentered: true,
      }}>
      <Spacer space={16} />
      <View style={themedStyles.cardViewContainer}>
        <ImageBackground
          style={themedStyles.cardContainer}
          source={{ uri: headerData?.profileImage }}>
          <View testID={`${testId}-wrapper`} style={themedStyles.wrapper}>
            <Image
              source={DigitalCardCut}
              style={[
                themedStyles.imageBackground,
                { transform: [{ scaleX: !isRTL ? -1 : 1 }] },
              ]}
              resizeMode="cover"
            />

            <View style={themedStyles.contentWrapper}>
              <Headline
                text={name}
                isTranslated={false}
                size="md"
                weight="Semibold"
                testId={`${testId}-name`}
              />
              <Headline
                text={jobTitle}
                isTranslated={false}
                testId={`${testId}-job-title`}
                size="xs"
                weight="Medium"
              />
              <Spacer space={24} />
              <Logo testId={`${testId}-logo`} size="md" />
              <Spacer space={24} />
            </View>
          </View>
        </ImageBackground>
      </View>
      <Spacer space={7} />
      <View style={themedStyles.row}>
        <LottieView
          source={identityAnimation}
          autoPlay
          loop
          style={themedStyles.identityAnimation}
        />
        <Paragraph
          text={'profile.digitalCardDetails.animation'}
          testId={`${testId}-animation`}
          size="xl"
          weight="Medium"
          style={themedStyles.iconAnimationText}
        />
      </View>
      <Spacer space={7} />
      <BaseButton
        variant="secondary"
        textProps={{ text: 'profile.digitalCardDetails.share' }}
        size="lg"
        testId={`${testId}-share`}
        leftIcon={{ name: 'QrCode' }}
        onPress={() => setModalVisible(true)}
      />
      <Spacer space={7} />
      <BaseModal
        testId={''}
        visible={modalVisible}
        transparent
        animationType="fade">
        <Pressable
          style={themedStyles.backdrop}
          onPress={() => setModalVisible(false)}>
          <View style={themedStyles.qrCodeContainer}>
            <View style={themedStyles.qrCodeInnerContainer}>
              <QRCode
                size={180}
                color={getThemeColor('borderBlack')}
                backgroundColor={getThemeColor('borderWhite')}
                value={vcard}
                // logoMargin={5}
                // logo={require('@/assets/images/HRSD-Logo.png')}
              />
            </View>
          </View>
        </Pressable>
      </BaseModal>
    </Page>
  );
};

export default DigitalCardScreen;
