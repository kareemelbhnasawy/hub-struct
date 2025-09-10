import { Spacer, Paragraph, Headline, LucideIcon } from '@/components/atoms';
import { BaseSheet } from '@/components/molecules';
import { SnapPoints } from '@/components/molecules/base-sheet/constants';
import { SelectionGroup } from '@/components/organisms';
import { openLink } from '@/utilities';
import { AddressCard } from '../partials';
import useGetAddresses from '@/network/services/profile/get-addresses/get-addresses.hook';
import { useEffect, useState } from 'react';
import { useStartFlow } from '@/network/hooks';
import { useNavigation } from '@/hooks';
import { useDeviceId } from '@/hooks/use-device-id';
import PROFILE_URLS from '@/network/services/profile/profile.urls';
import PROFILE_QUERY_KEYS from '@/network/services/profile/profile.query-keys';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import { View } from 'react-native';

const EditAddressSheet = ({
  testId,
  modalVisible,
  setModalVisible,
  defaultSelectedAddress,
}: {
  testId: string;
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
  defaultSelectedAddress?: string;
}) => {
  const [isError, setIsError] = useState(false);
  const [isWarning, setIsWarning] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState<{
    addressShortCode: string;
    addressDescription: string;
  } | null>(null);
  const { navigateToOTP } = useNavigation();
  const { deviceId } = useDeviceId();

  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const checkAddressWarnings = (res: unknown) => {
    if (!selectedAddress)
      res?.addresses?.forEach((address) => {
        if (address.addressDescription === defaultSelectedAddress) {
          setSelectedAddress(address);
          setIsWarning(false);
        }
      });
  };

  const { data } = useGetAddresses(
    (res) => checkAddressWarnings(res),
    () => setIsError(true),
  );
  const onSuccessStartAddress = (data: unknown) => {
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
    onSuccessStartAddress,
    () => {},
    PROFILE_QUERY_KEYS.ADDRESS_START,
  );

  useEffect(() => {
    if (modalVisible) {
      setSelectedAddress(null);
    }
  }, [modalVisible]);

  return (
    <BaseSheet
      testId={`${testId}-edit-address`}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      snapPoints={SnapPoints.XL}
      enableDynamicSizing={false}
      titleProps={{
        text: 'profile.editAddress',
        weight: 'Medium',
        size: 'xs',
      }}
      headerVariant="centerWithClose"
      hasSubmitButton
      buttonProps={{
        textProps: { text: 'common.save' },
        onPress: () => mutate({ ...selectedAddress, deviceId }),
        disabled:
          isError ||
          !selectedAddress ||
          selectedAddress?.addressDescription === defaultSelectedAddress,
      }}>
      <Spacer />
      {isWarning && defaultSelectedAddress && (
        <>
          <View style={themedStyles.warningContainer}>
            <LucideIcon
              testId={`${testId}-edit-address`}
              name="MapPin"
              isCircle
              containerStyle={themedStyles.iconDescriptiveOrange}
            />
            <Spacer />
            <View>
              <Paragraph
                testId={`${testId}-edit-address-warning`}
                text="profile.contractAddress"
              />
              <Spacer space="xs" />
              <Headline
                testId={`${testId}-edit-address-warning`}
                size="xs"
                isTranslated={false}
                text={defaultSelectedAddress}
              />
            </View>
          </View>
          <Spacer space="xs" />
          <Paragraph
            testId={`${testId}-edit-address-warning`}
            size="xl"
            text="profile.notRegisteredSabil"
          />
          <Spacer space="3xl" />
        </>
      )}
      {data?.addresses && data?.addresses.length > 0 && (
        <>
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
        </>
      )}
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
    </BaseSheet>
  );
};
export default EditAddressSheet;
