import { Pressable, View } from 'react-native';
import { useThemeStore } from '@/store/theme';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import splashBgAnimation from '@/assets/animations/splash-bg-animation.json';
import { BlurView } from '@react-native-community/blur';
import Logo from '@/components/molecules/logo';
import { Page } from '@/components/templates';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { BaseModal, Headline, Paragraph, Spacer } from '@/components/atoms';
import { BaseButton } from '@/components/molecules';
import { useProfileStore } from '@/store/profile';
import useGetPersonDetails from '@/network/services/profile/get-person-details/get-person-details.hook';
import { useMemo, useState } from 'react';
import QRCode from 'react-native-qrcode-svg';

const DigitalCardScreen = () => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const testId = 'digital-card-screen';
  const { jobTitle, name } = useProfileStore();

  const { data, isPending } = useGetPersonDetails();
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
    const notes = [];
    if (data?.jobInfo?.jobTitle) {
      lines.push(`TITLE:${data?.jobInfo?.jobTitle}`);
      notes.push(data?.jobInfo?.jobTitle);
    }
    if (data?.jobInfo?.management) {
      lines.push(`ORG:${data?.jobInfo?.management}`);
      notes.push(data?.jobInfo?.management);
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
  }, [data]);
  const [modalVisible, setModalVisible] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <Page
      testId={`${testId}`}
      isLoading={isPending}
      pageHeaderVariant={PageHeaderVariants.BackWithTitle}
      pageHeaderProps={{
        titleProps: { text: 'profile.digitalCard' },
        isTitleCentered: true,
      }}>
      <Spacer space={16} />
      <View style={themedStyles.cardContainer}>
        <View testID={`${testId}-wrapper`} style={themedStyles.wrapper}>
          <LottieView
            source={splashBgAnimation}
            autoPlay={false}
            loop={false}
            resizeMode="cover"
            style={themedStyles.absoluteFill}
          />
          <BlurView
            testID={`${testId}-animation-blur`}
            style={themedStyles.absoluteFill}
            blurType="light"
            blurAmount={50}
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
      </View>
      <Spacer space={7} />
      <Paragraph
        text={'profile.digitalCardDetails.animation'}
        testId={`${testId}-animation`}
        size="xl"
        weight="Medium"
        style={themedStyles.iconAnimationText}
      />
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
