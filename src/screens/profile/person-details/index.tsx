import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import {
  BaseSheet,
  BrandToggle,
  DescriptiveIcon,
  List,
  TextInput,
} from '@/components/molecules';
import { Page } from '@/components/templates';
import { Pressable, View } from 'react-native';
import styles from './styles';
import useGetPersonDetails from '@/network/services/profile/get-person-details/get-person-details.hook';
import { InfoItem, PersonDetailsResponse } from './interface';
import { useThemeStore } from '@/store/theme';
import { basicInfoDataHandler, contactInfoDataHandler } from './constants';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { useState } from 'react';
import { useDeviceId } from '@/hooks/use-device-id';
import { useNavigation } from '@/hooks';
import { getExtensionError, getPhoneError, isPhoneValid } from './utils';
import { formatPhoneNumber } from '@/utilities/formats';
import { useStartFlow } from '@/network/hooks';
import EditAddressSheet from './edit-address-sheet';

const PersonDetails = () => {
  const { getThemedStyles } = useThemeStore();
  const screenTestId = 'person-details-screen';
  const themedStyle = getThemedStyles(styles);

  const { data, isLoading } = useGetPersonDetails() as {
    data: PersonDetailsResponse | undefined;
    isLoading: boolean;
  };
  const [modalVisible, setModalVisible] = useState(false);
  const { navigateToOTP } = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [extensionNumber, setExtension] = useState('');
  const [showForAll, setShowForAll] = useState(false);
  const [type, setType] = useState<'mobile' | 'extension'>('mobile');
  const { deviceId } = useDeviceId();
  const [error, setError] = useState<string | null>();
  const [addressModalVisible, setAddressModalVisible] = useState(false);

  const basicInfoData = basicInfoDataHandler(data);

  const contactInfoData = contactInfoDataHandler(data);

  const showPhoneToast = () => {
    return {
      text: 'profileDetails.mobileSuccessfulEdit',
    };
  };
  const showExtensionToast = () => {
    return {
      text: 'profileDetails.extensionSuccessfulEdit',
    };
  };

  const onSuccessStartPhone = (data: unknown) => {
    setModalVisible(false);
    navigateToOTP({
      body: { mobileNumber, deviceId, isShown: showForAll },
      nextScreen: 'PersonDetails',
      url: 'profile/v1/mobile-number/edit',
      expiresIn: data?.expiresIn,
      mobile: data?.mobileNumber,
      showSuccessToast: showPhoneToast,
      isBack: true,
    });
  };
  const onSuccessStartExtension = (data: unknown) => {
    setModalVisible(false);
    navigateToOTP({
      body: { extensionNumber, deviceId },
      nextScreen: 'PersonDetails',
      url: 'profile/v1/extension-number/edit',
      expiresIn: data?.expiresIn,
      mobile: data?.mobileNumber,
      showSuccessToast: showExtensionToast,
      isBack: true,
    });
  };
  const onErrorStartPhone = () => {
    setModalVisible(false);
  };
  const onErrorStartExtension = () => {
    setModalVisible(false);
  };
  const { mutate: mutatePhone } = useStartFlow(
    'profile/v1/mobile-number/edit',
    onSuccessStartPhone,
    onErrorStartPhone,
    'PHONE_START',
  );
  const { mutate: mutateExtension } = useStartFlow(
    'profile/v1/extension-number/edit',
    onSuccessStartExtension,
    onErrorStartExtension,
    'EXTENSION_START',
  );

  const handleExtensionChange = (value: string) => {
    setError(getExtensionError(value));
    setExtension(value);
  };

  const handlePhoneChange = (value: string) => {
    const formattedValue = formatPhoneNumber(value);
    setError(getPhoneError(formattedValue));
    setMobileNumber(formattedValue);
  };

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

  const renderContactInfoItem = ({ item }: { item: InfoItem }) => (
    <Pressable
      style={themedStyle.info}
      onPress={() => {
        if (item.type === 'mobile') {
          setType('mobile');
          setModalVisible(true);
        } else if (item.type === 'extension') {
          setType('extension');
          setModalVisible(true);
        } else if (item.key === 'address') {
          setAddressModalVisible(true);
        }
      }}>
      <Paragraph
        text={item.label}
        size="xl"
        weight="Medium"
        testId={`contact-${item.key}-label`}
      />
      <View style={themedStyle.row}>
        <Headline
          text={item.value}
          size="2xs"
          weight="Medium"
          testId={`contact-${item.key}-value`}
        />
        <LucideIcon
          name="ChevronRight"
          isRTLMirrored
          size={20}
          testId={`contact-${item.key}-chevron`}
        />
      </View>
    </Pressable>
  );

  const mobileNumberRender = (
    <View>
      <TextInput
        value={mobileNumber}
        onChangeText={handlePhoneChange}
        keyboardType="phone-pad"
        maxLength={13}
        style={themedStyle.mobileInput}
        isRequired
        labelProps={{
          text: 'profileDetails.mobileNumber',
        }}
        placeholder="05XXXXXXXXX"
        errorProps={error}
        isBottomSheet={true}
        testId="demo-base-sheet-input"
        editable={true}
      />
      <BrandToggle
        testId="demo-base-sheet-brand-toggle"
        value={showForAll}
        onValueChange={setShowForAll}
        titleProps={{
          text: 'profileDetails.showNumber',
        }}
      />
    </View>
  );

  const extensionRender = (
    <View>
      <TextInput
        value={extensionNumber}
        onChangeText={handleExtensionChange}
        keyboardType="number-pad"
        maxLength={4}
        isRequired
        style={themedStyle.mobileInput}
        labelProps={{
          text: 'profileDetails.extension',
        }}
        placeholder="1234"
        isBottomSheet={true}
        errorProps={error}
        testId="demo-base-sheet-input"
        editable={true}
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
        titleProps: { text: 'profile.personDetails.personalInfo' },
        isTitleCentered: true,
      }}>
      <Spacer space={'xl'} />
      <DescriptiveIcon
        testId={`${screenTestId}-basic-info`}
        iconProps={{
          name: 'User',
          size: 18,
          isCircle: true,
          containerStyle: themedStyle.iconDescriptiveYellow,
        }}
        textProps={{
          text: 'profile.personDetails.basicInfo',
          size: '2xs',
          weight: 'Medium',
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
          containerStyle: themedStyle.iconDescriptiveGreen,
        }}
        textProps={{
          text: 'profile.personDetails.contactInfo',
          size: '2xs',
          weight: 'Medium',
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
      <BaseSheet
        testId="demo-base-sheet"
        headerVariant="centerWithClose"
        titleProps={{
          text:
            type === 'mobile'
              ? 'profileDetails.editPersonalPhone1'
              : 'profileDetails.editExtension',
          size: 'md',
          weight: 'Semibold',
        }}
        // onClose={() => setError(undefined)}
        hasCloseButton={true}
        hasSubmitButton={true}
        buttonProps={{
          textProps: { text: 'common.save' },
          onPress: () => {
            setModalVisible(false);
            if (type === 'mobile') {
              mutatePhone({ mobileNumber, deviceId, isShown: showForAll });
            } else {
              mutateExtension({ extensionNumber, deviceId });
            }
          },
          disabled:
            type === 'mobile'
              ? !isPhoneValid(mobileNumber)
              : extensionNumber.length < 1,
          testId: 'demo-base-sheet-button',
        }}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onClose={() => setError(undefined)}
        containerStyle={themedStyle.bottomSheetContainer}>
        {type === 'mobile' ? mobileNumberRender : extensionRender}
      </BaseSheet>
      <EditAddressSheet
        testId={screenTestId}
        modalVisible={addressModalVisible}
        setModalVisible={setAddressModalVisible}
        defaultSelectedAddress={data?.contactInfo?.address}
      />
    </Page>
  );
};

export default PersonDetails;
