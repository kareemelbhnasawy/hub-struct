/* eslint-disable */
import { useState } from 'react';
import { View, Pressable } from 'react-native';
import BaseSheet from './index';
import { Paragraph } from '@/components/atoms';
import TextInput from '../text-input';
import BrandToggle from '../brand-toggle';
import { useThemeStore } from '@/store/theme';
import { formatPhoneNumber } from '@/utilities/formats';
import { useNavigation } from '@/hooks';
import { useStartFlow } from '@/network/hooks';
import { useDeviceId } from '@/hooks/use-device-id';
import Yup from '@/utilities/custom-yup';

const BaseSheetDemo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { navigateToOTP } = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [extensionNumber, setExtension] = useState('');
  const [showForAll, setShowForAll] = useState(false);
  const { getThemeColor } = useThemeStore();
  const [type, setType] = useState<'mobile' | 'extension'>('extension');
  const { deviceId } = useDeviceId();

  // Use Yup schema for Saudi phone validation
  const phoneSchema = Yup.string().required().validSaudiPhoneNumber();
  const extensionSchema = Yup.string().required();

  const getPhoneError = (value: string) => {
    try {
      phoneSchema.validateSync(value);
      return undefined;
    } catch (err: unknown) {
      return err?.message;
    }
  };

  const getExtensionError = (value: string): string | null => {
    try {
      extensionSchema.validateSync(value);
      return undefined;
    } catch (err: unknown) {
      return err?.message;
    }
  };

  // For disabling the button
  const isPhoneValid = (value: string) => {
    try {
      phoneSchema.validateSync(value);
      return true;
    } catch {
      return false;
    }
  };

  const onSuccessStartPhone = (data: unknown) => {
    setModalVisible(false);
    navigateToOTP({
      body: { mobileNumber, deviceId, isShown: showForAll },
      nextScreen: 'Home',
      url: 'profile/v1/mobile-number/edit',
      expiresIn: data?.expiresIn,
      mobile: data?.mobileNumber,
      nextScreenParams: {
        showSuccessToast: true,
        successToastMessage: 'profileDetails.mobileSuccessfulEdit',
      },
    });
  };
  const onSuccessStartExtension = (data: unknown) => {
    setModalVisible(false);
    navigateToOTP({
      body: { extensionNumber, deviceId },
      nextScreen: 'Home',
      url: 'profile/v1/extension-number/edit',
      expiresIn: data?.expiresIn,
      mobile: data?.mobileNumber,
      nextScreenParams: {
        showSuccessToast: true,
        successToastMessage: 'profileDetails.extensionSuccessfulEdit',
      },
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
    setExtension(value);
  };

  const handlePhoneChange = (value: string) => {
    const formattedValue = formatPhoneNumber(value);
    setMobileNumber(formattedValue);
  };

  const mobileNumberRender = (
    <View>
      <TextInput
        value={mobileNumber}
        onChangeText={handlePhoneChange}
        keyboardType="phone-pad"
        maxLength={13} // Adjust for "+966" format
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 12,
          marginTop: 8,
          marginBottom: 16,
          fontSize: 18,
        }}
        isRequired
        labelProps={{
          text: 'profileDetails.mobileNumber',
        }}
        placeholder="05XXXXXXXXX"
        errorProps={getPhoneError(mobileNumber)}
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
        style={{
          borderWidth: 1,
          borderColor: getThemeColor('borderBackgroundNeutral'),
          borderRadius: 8,
          padding: 12,
          marginTop: 8,
          marginBottom: 16,
          fontSize: 18,
        }}
        labelProps={{
          text: 'profileDetails.extension',
        }}
        placeholder="1234"
        isBottomSheet={true}
        errorProps={getExtensionError(extensionNumber)}
        testId="demo-base-sheet-input"
        editable={true}
      />
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F9FC',
      }}>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          backgroundColor: '#1570EF',
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 8,
        }}>
        <Paragraph
          style={{ color: 'white', fontWeight: 'bold' }}
          text="تعديل التليفون الشخصي"
          testId="demo-base-sheet-open-button"
        />
      </Pressable>

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
        hasCloseButton={true}
        hasSubmitButton={true}
        buttonProps={{
          textProps: { text: 'common.save' },
          onPress: () =>
            type === 'mobile'
              ? mutatePhone({ mobileNumber, deviceId, isShown: showForAll })
              : mutateExtension({ extensionNumber, deviceId }),
          disabled:
            type === 'mobile'
              ? !isPhoneValid(mobileNumber)
              : extensionNumber.length < 1,
          testId: 'demo-base-sheet-button',
        }}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        containerStyle={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
        {type === 'mobile' ? mobileNumberRender : extensionRender}
      </BaseSheet>
    </View>
  );
};

export default BaseSheetDemo;
