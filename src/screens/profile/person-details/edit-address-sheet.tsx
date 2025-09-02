import { Spacer, Paragraph, Headline } from '@/components/atoms';
import { BaseButton, BaseSheet } from '@/components/molecules';
import { SnapPoints } from '@/components/molecules/base-sheet/constants';
import { SelectionGroup } from '@/components/organisms';
import { openLink } from '@/utilities';
import { AddressCard } from '../partials';
import useGetAddresses from '@/network/services/profile/get-addresses/get-addresses.hook';
import { useState } from 'react';
import { useStartFlow } from '@/network/hooks';
import { useNavigation } from '@/hooks';
import { useDeviceId } from '@/hooks/use-device-id';

const EditAddressSheet = ({
  testId,
  modalVisible,
  setModalVisible,
  defaultSelectedAddress,
}: {
  testId: string;
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
  defaultSelectedAddress?: object;
}) => {
  const [isError, setIsError] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(
    defaultSelectedAddress,
  );
  const { navigateToOTP } = useNavigation();
  const { deviceId } = useDeviceId();

  const { data } = useGetAddresses(() => setIsError(true));
  const onSuccessStartExtension = (data: unknown) => {
    setModalVisible(false);
    navigateToOTP({
      body: { ...selectedAddress, deviceId },
      nextScreen: 'PersonDetails',
      url: 'profile/v1/address/edit',
      expiresIn: data?.expiresIn,
      mobile: data?.mobileNumber,
      showSuccessToast: () => {
        return {
          text: 'تم تعديل العنوان بنجاح!',
        };
      },
      isBack: true,
    });
  };
  const { mutate } = useStartFlow(
    'profile/v1/address/edit',
    onSuccessStartExtension,
    () => {},
    'ADDRESS_START',
  );

  return (
    <BaseSheet
      testId={`${testId}-edit-address`}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      snapPoints={SnapPoints.XL}
      titleProps={{ text: 'profile.editAddress' }}>
      <Headline
        testId={`${testId}-edit-address`}
        text="profile.chooseAddress"
        size="xs"
        weight="Medium"
      />
      <Spacer space="xs" />
      <Paragraph
        testId={`${testId}-edit-address`}
        text="profile.chooseAddressDesc"
        size="xl"
      />
      <Spacer space="xl" />
      <SelectionGroup
        testId={`${testId}-edit-address`}
        data={data?.addresses}
        emptyComponentProps={{
          iconProps: { name: 'MapPinX' },
          headlineProps: {
            text: 'لا يوجد لديك عناوين مسجلة في سبل',
          },
          paragraphProps: {
            text: 'برجاء اضافة عنوانك الوطني في سبل ثم اختياره من هنا لكي يظهر في ملفك الشخصي',
          },
          buttonProps: {
            textProps: { text: 'إضافة عنوان جديد عبر سبل' },
            leftIcon: { name: 'ExternalLink' },
            onPress: () => {
              openLink('https://www.google.com/');
            },
          },
        }}
        errorComponentProps={{
          iconProps: { name: 'Unlink' },
          headlineProps: {
            text: 'تعذر تحميل العناوين',
          },
          paragraphProps: {
            text: 'حدث خطأ أثناء جلب بيانات العناوين من سبل. يرجى المحاولة لاحقاً.',
          },
        }}
        isError={isError}
        value={selectedAddress}
        onChangeValue={setSelectedAddress}
        valueKey={'addressShortCode'}
        spread
        spacerProps={{ space: 'xl' }}
        keyExtractor={({ item }) => item.addressShortCode}
        renderItem={({ item }) => (
          <AddressCard
            testId={`${testId}-${item.addressShortCode}`}
            addressCodeProps={{ text: item.addressShortCode }}
            addressDescProps={{ text: item.addressDescription }}
            isPrimaryAddress={item.isPrimary}
          />
        )}
        renderSelectedItem={({ item }) => (
          <AddressCard
            testId={`${testId}-${item.addressShortCode}`}
            addressCodeProps={{ text: item.addressShortCode }}
            addressDescProps={{ text: item.addressDescription }}
            isPrimaryAddress={item.isPrimary}
            isFocused
          />
        )}
      />
      <Spacer space="3xl" />
      <BaseButton
        testId={testId}
        textProps={{ text: 'Save' }}
        onPress={() => mutate({ ...selectedAddress, deviceId })}
      />
    </BaseSheet>
  );
};
export default EditAddressSheet;
