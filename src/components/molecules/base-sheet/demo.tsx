/* eslint-disable */
import { useState } from 'react';
import { View, Pressable } from 'react-native';
import BaseSheet from './index';
import { Paragraph } from '@/components/atoms';
import TextInput from '../text-input';
import BrandToggle from '../brand-toggle';
import { useThemeStore } from '@/store/theme';
import { maskPhoneNumber } from '@/utilities/maskings';
import { getPhoneError, validateSaudiNumber } from '@/utilities/validations';
import { formatPhoneNumber } from '@/utilities/formats';

const BaseSheetDemo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = useState('');
  const [extension, setExtension] = useState('');
  const [showForAll, setShowForAll] = useState(false);
  const { getThemeColor } = useThemeStore();
  const [type, setType] = useState<'mobile' | 'extension'>('extension');
  const [extensionError, setExtensionError] = useState<string | null>(null);

  const handleExtensionChange = (value: string) => {
    setExtension(value);
    setExtensionError(getExtensionError(value));
  };

  const getExtensionError = (value: string): string | null => {
    if (!value) return 'inputs.defaultInputValidations.mixed.required';
    // if (!/^[0-9]{4}$/.test(value))
    //   return 'inputs.defaultInputValidations.string.length';
    return null;
  };

  const handlePhoneChange = (value: string) => {
    const formattedValue = formatPhoneNumber(value);
    setPhone(formattedValue);
  };

  const mobileNumberRender = (
    <View>
      <TextInput
        value={showForAll ? phone : maskPhoneNumber(phone)}
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
        errorProps={getPhoneError(phone)}
        isBottomSheet={true}
        testId="demo-base-sheet-input"
        editable={showForAll}
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
        value={extension}
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
        errorProps={extensionError ? { text: extensionError } : undefined}
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
          onPress: () => setModalVisible(false),
          disabled:
            type === 'mobile'
              ? !validateSaudiNumber(phone)
              : extension.length < 1,
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
