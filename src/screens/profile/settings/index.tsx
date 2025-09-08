import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import ProfileSettingItem from '../partials/profile-setting-item';
import { deleteKey } from '@/utilities';
import { ProfileSettingItemDataType } from '../partials/profile-setting-item/interface';
import { BrandToggle, GlassModal, List } from '@/components/molecules';
import { useNavigation, useTranslate } from '@/hooks';
import { Headline, Spacer } from '@/components/atoms';
import { useEffect, useMemo, useState } from 'react';
import useLogout from '@/network/services/auth/logout/logout.hook';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { useAuthStore } from '@/store/auth';
import {
  bioPrompt,
  deleteBioKeys,
  generateBioKeys,
  getBioType,
} from '@/utilities/biometrics';
import { BiometryTypes } from 'react-native-biometrics';
import useSetBio from '@/network/services/auth/set-bio/set-bio.hook';
import useRemoveBio from '@/network/services/auth/remove-bio/remove-bio.hook';
import useRemovePin from '@/network/services/auth/remove-pin/remove-pin.hook';
import { View } from 'react-native';

const ProfileSettings = () => {
  const screenTestId = 'profile-settings-screen';
  const navigation = useNavigation();
  const { toggleLanguage } = useTranslate();
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [changeQuickLoginVisible, setChangeQuickLoginVisible] = useState(false);
  const [bioLoading, setBioLoading] = useState(false);
  const { quickLoginType, setQuickLoginType, setUsername, email } =
    useAuthStore();
  const [biometricType, setBiometricType] = useState<
    'TOUCH_ID' | 'FACE_ID' | null
  >(null);

  const [changeQuickLoginFn, setChangeQuickLoginFn] = useState<() => void>(
    () => null,
  );

  const bioEnabled = useMemo(
    () => quickLoginType === 'FACE_ID' || quickLoginType === 'TOUCH_ID',
    [quickLoginType],
  );
  const pinEnabled = useMemo(
    () => quickLoginType === 'PIN_CODE',
    [quickLoginType],
  );

  const bioIcon = useMemo(() => {
    if (biometricType === 'FACE_ID') return 'ScanFace';
    if (biometricType === 'TOUCH_ID') return 'Fingerprint';
    return 'Lock';
  }, [biometricType]);

  const onSetBioSuccess = () => {
    setBioLoading(false);
    setQuickLoginType(biometricType || '');
    setUsername('Daniel');
  };

  const deleteBioKey = () => {
    setBioLoading(false);
    deleteBioKeys();
    setQuickLoginType('');
  };

  const deletePinKey = () => {
    setQuickLoginType('');
  };

  const { mutate: mutateSetBio, isPending: isSetPending } =
    useSetBio(onSetBioSuccess);
  const { mutate: mutateRemoveBio, isPending: isRemovePending } =
    useRemoveBio(deleteBioKey);
  const { mutate: mutateRemovePin, isPending: isRemovePinPending } =
    useRemovePin(deletePinKey);

  useEffect(() => {
    getBiometricType();
  }, []);

  const getBiometricType = () => {
    getBioType().then((resultObject) => {
      const { available, biometryType } = resultObject;
      if (available) {
        if (biometryType === BiometryTypes.FaceID) {
          setBiometricType('FACE_ID');
        } else {
          setBiometricType('TOUCH_ID');
        }
      }
    });
  };

  const getBioKey = () => {
    bioPrompt().then((resultObject) => {
      const { success } = resultObject;
      if (success) {
        generateBioKeys().then((resultObject) => {
          const { publicKey } = resultObject;
          mutateSetBio({
            email,
            publicKey,
            biometricType,
          });
        });
      }
    });
  };

  const onPressBio = () => {
    setBioLoading(true);
    if (bioEnabled) {
      mutateRemoveBio({ email });
    } else {
      setChangeQuickLoginVisible(false);
      getBioKey();
    }
  };

  const onPressPin = () => {
    if (pinEnabled) {
      mutateRemovePin({ email });
    } else {
      setChangeQuickLoginVisible(false);
      navigation.navigateTo('SetPin');
    }
  };

  const onQuickLoginPress = (type: 'PIN_CODE' | 'FACE_ID' | 'TOUCH_ID') => {
    let changeFn: () => void;
    if (type === 'PIN_CODE') {
      changeFn = onPressPin;
    } else {
      changeFn = onPressBio;
    }
    if (quickLoginType && quickLoginType != type) {
      setChangeQuickLoginVisible(true);
      setChangeQuickLoginFn(() => changeFn);
    } else {
      changeFn();
    }
  };

  const renderListItem = ({
    item,
  }: {
    item: ProfileSettingItemDataType;
    index: number;
  }) => {
    return (
      <ProfileSettingItem
        iconProps={item.iconProps}
        textProps={{
          text: item.title,
        }}
        testId={screenTestId}
        onPress={item.onPress}
        hasForwardIcon={item.hasForwardIcon}
        renderCustomTrailingIcon={item.renderCustomTrailingIcon}
      />
    );
  };

  const personalSettings: ProfileSettingItemDataType[] = [
    {
      id: '1',
      title: 'profile.settings.changeBgImage',
      iconProps: {
        name: 'Image',
        containerStyle: themedStyles.iconDescriptiveBlue,
      },
      onPress: () => navigation.navigate('EditBackground'),
    },
    {
      id: '2',
      title: 'profile.nickname',
      iconProps: {
        name: 'AlignVerticalJustifyStart',
        containerStyle: themedStyles.iconDescriptiveTeal,
      },
      onPress: () => navigation.navigate('KunyaCrud'),
    },
    {
      id: '3',
      title: 'profile.settings.switchLang',
      iconProps: {
        name: 'Languages',
        containerStyle: themedStyles.iconDescriptiveYellow,
      },
      onPress: () => setLangModalVisible(true),
      hasForwardIcon: false,
    },
  ];
  const securitySettings: ProfileSettingItemDataType[] = useMemo(() => {
    const bioRecord: ProfileSettingItemDataType = {
      id: '1',
      title: `profile.settings.activate${biometricType}`,
      iconProps: {
        name: bioIcon,
        containerStyle: themedStyles.iconDescriptiveTeal,
      },
      onPress: () => onQuickLoginPress(biometricType),
      renderCustomTrailingIcon: () => (
        <View style={themedStyles.alignSelfStart}>
          <BrandToggle
            testId={`${screenTestId}-bio`}
            value={bioEnabled}
            containerStyle={themedStyles.paddingVertical0}
            loading={
              changeQuickLoginVisible ||
              bioLoading ||
              isSetPending ||
              isRemovePending
            }
            onChangeValue={() => onQuickLoginPress(biometricType)}
          />
        </View>
      ),
    };
    const pinRecord: ProfileSettingItemDataType = {
      id: '2',
      title: 'profile.settings.activatePIN_CODE',
      iconProps: {
        name: 'Lock',
        containerStyle: themedStyles.iconDescriptiveYellow,
      },
      onPress: () => onQuickLoginPress('PIN_CODE'),
      renderCustomTrailingIcon: () => (
        <View style={themedStyles.alignSelfStart}>
          <BrandToggle
            testId={`${screenTestId}-pin`}
            value={pinEnabled}
            containerStyle={themedStyles.paddingVertical0}
            loading={changeQuickLoginVisible}
            onChangeValue={() => onQuickLoginPress('PIN_CODE')}
          />
        </View>
      ),
    };
    if (biometricType) {
      return [bioRecord, pinRecord];
    }
    return [pinRecord];
  }, [
    bioEnabled,
    bioIcon,
    bioLoading,
    biometricType,
    changeQuickLoginVisible,
    isRemovePending,
    isSetPending,
    onQuickLoginPress,
    pinEnabled,
    themedStyles,
  ]);

  const onLogoutSuccess = () => {
    deleteKey(STORAGE_KEYS.REFRESH_TOKEN);
    navigation.resetToStack('Auth', 'Login');
  };
  const { mutate: logout } = useLogout(onLogoutSuccess);

  const changeQuickLoginText = useMemo(() => {
    if (quickLoginType === 'PIN_CODE') {
      return {
        desc: `profile.settings.change${quickLoginType}_${biometricType}`,
        action: `profile.settings.activate${biometricType}`,
      };
    } else {
      return {
        desc: `profile.settings.change${quickLoginType}_PIN_CODE`,
        action: 'profile.settings.activatePIN_CODE',
      };
    }
  }, [quickLoginType, biometricType]);

  return (
    <Page
      testId={screenTestId}
      isLoading={isRemovePending || isRemovePinPending || isSetPending}
      pageHeaderProps={{
        titleProps: { text: 'profile.settings.settings' },
        isTitleCentered: true,
      }}>
      <GlassModal
        testId={screenTestId}
        visible={langModalVisible}
        headlineProps={{
          text: 'profile.settings.changeLang',
          style: themedStyles.textAlignRight,
        }}
        paragraphProps={{
          text: 'profile.settings.appRestart',
          style: themedStyles.textAlignRight,
        }}
        buttonProps={{
          textProps: {
            text: 'profile.settings.switch',
          },
          onPress: toggleLanguage,
          containerStyle: themedStyles.round,
        }}
        secondaryButtonProps={{
          textProps: { text: 'profile.settings.back' },
          onPress: () => setLangModalVisible(false),
          containerStyle: themedStyles.round,
        }}
      />
      <GlassModal
        testId={screenTestId}
        visible={logoutModalVisible}
        headlineProps={{ text: 'profile.settings.signOut' }}
        paragraphProps={{
          text: 'profile.settings.signOutDesc',
        }}
        buttonProps={{
          textProps: { text: 'profile.settings.signOut' },
          onPress: () => logout({ email }),
          containerStyle: themedStyles.round,
        }}
        secondaryButtonProps={{
          textProps: { text: 'common.back' },
          onPress: () => setLogoutModalVisible(false),
          containerStyle: themedStyles.round,
        }}
      />
      <GlassModal
        testId={screenTestId}
        visible={changeQuickLoginVisible}
        headlineProps={{ text: 'profile.settings.changeSignIn' }}
        paragraphProps={{
          text: changeQuickLoginText.desc,
        }}
        buttonProps={{
          textProps: { text: changeQuickLoginText.action },
          onPress: changeQuickLoginFn,
          containerStyle: themedStyles.round,
        }}
        secondaryButtonProps={{
          textProps: { text: 'common.back' },
          onPress: () => setChangeQuickLoginVisible(false),
          containerStyle: themedStyles.round,
        }}
      />

      <Spacer space="3xl" />
      <Headline testId={screenTestId} text="profile.settings.specialSettings" />
      <List<ProfileSettingItemDataType>
        testId={screenTestId}
        data={personalSettings}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
      <Spacer space="3xl" />
      <Headline
        testId={screenTestId}
        text="profile.settings.securitySettings"
      />
      <List<ProfileSettingItemDataType>
        testId={screenTestId}
        data={securitySettings}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
      <Spacer space="6xl" />
      <ProfileSettingItem
        iconProps={{
          name: 'LogOut',
          containerStyle: themedStyles.iconDescriptiveTransparent,
          isRTLMirrored: true,
        }}
        textProps={{
          text: 'profile.settings.signOut',
        }}
        testId={screenTestId}
        onPress={() => setLogoutModalVisible(true)}
        hasForwardIcon={false}
      />
    </Page>
  );
};

export default ProfileSettings;
