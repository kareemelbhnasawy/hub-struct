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
import PROFILE_URLS from '@/network/services/profile/profile.urls';
import PROFILE_QUERY_KEYS from '@/network/services/profile/profile.query-keys';

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
      url: PROFILE_URLS.EDIT_ADDRESS,
      expiresIn: data?.expiresIn,
      mobile: data?.mobileNumber,
      showSuccessToast: () => {
        return {
          text: 'profile.editAddressSuccess',
        };
      },
      isBack: true,
    });
  };
  const { mutate } = useStartFlow(
    PROFILE_URLS.EDIT_ADDRESS,
    onSuccessStartExtension,
    () => { },
    PROFILE_QUERY_KEYS.ADDRESS_START,
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
            text: 'profile.noAddressesTitle',
          },
          paragraphProps: {
            text: 'profile.noAddressesDesc',
          },
          buttonProps: {
            textProps: { text: 'profile.addNewAddressViaSPL' },
            leftIcon: { name: 'ExternalLink' },
            onPress: () => {
              openLink('https://www.google.com/');
            },
          },
        }}
        errorComponentProps={{
          iconProps: { name: 'Unlink' },
          headlineProps: {
            text: 'profile.addressesLoadErrorTitle',
          },
          paragraphProps: {
            text: 'profile.addressesLoadErrorDesc',
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
        textProps={{ text: 'common.save' }}
        onPress={() => mutate({ ...selectedAddress, deviceId })}
      />
    </BaseSheet>
  );
};
export default EditAddressSheet;
