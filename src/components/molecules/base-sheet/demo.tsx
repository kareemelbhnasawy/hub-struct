/* eslint-disable */
import { useState } from 'react';
import { View, Pressable, Switch } from 'react-native';
import BaseSheet from './index';
import { Paragraph } from '@/components/atoms';
import TextInput from '../text-input';

const BaseSheetDemo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = useState('05XXXXXXXXX');
  const [showForAll, setShowForAll] = useState(false);

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
        />
      </Pressable>

      <BaseSheet
        testId="demo-base-sheet"
        titleProps={{
          text: 'تعديل التليفون شخصي 1',
          size: 'lg',
          weight: 'Semibold',
          style: { textAlign: 'right', writingDirection: 'rtl' },
        }}
        hasCloseButton={true}
        hasSubmitButton={true}
        buttonProps={{
          textProps: { text: 'حفظ', style: { writingDirection: 'rtl' } },
          variant: 'primary',
          onPress: () => setModalVisible(false),
          disabled: phone.length < 10,
          style: { marginTop: 16 },
          testId: 'demo-base-sheet-button',
        }}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        containerStyle={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
        <View style={{ padding: 16 }}>
          <Paragraph
            text="رقم الجوال"
            size="md"
            weight="Medium"
            style={{
              color: '#344054',
              marginBottom: 4,
              textAlign: 'right',
              writingDirection: 'rtl',
            }}
          />
          <Paragraph
            text="*"
            size="xs"
            weight="Regular"
            style={{
              color: '#F04438',
              fontSize: 12,
              textAlign: 'right',
              writingDirection: 'rtl',
            }}
          />
          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="number-pad"
            maxLength={10}
            style={{
              borderWidth: 1,
              borderColor: '#D0D5DD',
              borderRadius: 8,
              padding: 12,
              marginTop: 8,
              marginBottom: 16,
              textAlign: 'right',
              writingDirection: 'rtl',
              fontSize: 18,
              backgroundColor: '#fff',
            }}
            placeholder="05XXXXXXXXX"
            placeholderTextColor="#98A2B3"
            isBottomSheet={true}
            testId="demo-base-sheet-input"
          />
          <View
            style={{
              flexDirection: 'row-reverse',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <Paragraph
              text="T Text"
              size="sm"
              weight="Medium"
              style={{
                backgroundColor: '#7F56D9',
                color: '#fff',
                paddingHorizontal: 8,
                borderRadius: 4,
                marginLeft: 8,
                fontSize: 14,
              }}
            />
            <Paragraph
              text="اظهار الرقم للجميع"
              size="sm"
              weight="Medium"
              style={{
                color: '#7F56D9',
                borderWidth: 2,
                borderColor: '#7F56D9',
                borderRadius: 4,
                paddingHorizontal: 8,
                paddingVertical: 2,
                fontSize: 14,
                marginLeft: 8,
              }}
            />
            <Switch
              value={showForAll}
              onValueChange={setShowForAll}
              style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
            />
          </View>
        </View>
      </BaseSheet>
    </View>
  );
};

export default BaseSheetDemo;
