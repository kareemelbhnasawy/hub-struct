import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import ProfileSettingItem from '../partials/profile-setting-item';
import { deleteKey, log } from '@/utilities';
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

const ProfileSettings = () => {
  const screenTestId = 'profile-settings-screen';
  const navigation = useNavigation();
  const { toggleLanguage } = useTranslate();
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [changeQuickLoginVisible, setChangeQuickLoginVisible] = useState(false);
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
    setQuickLoginType(biometricType || '');
    setUsername('Daniel');
  };

  const deleteBioKey = () => {
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
      title: 'تغيير صورة الخلفية',
      iconProps: {
        name: 'Image',
        containerStyle: themedStyles.iconDescriptiveBlue,
      },
      onPress: () => log('photo pressed'),
    },
    {
      id: '2',
      title: 'الكنية',
      iconProps: {
        name: 'AlignVerticalJustifyStart',
        containerStyle: themedStyles.iconDescriptiveTeal,
      },
      onPress: () => log('nickname pressed'),
    },
    {
      id: '3',
      title: 'Switch to English',
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
      title: 'تفعيل بصمة الوجه',
      iconProps: {
        name: bioIcon,
        containerStyle: themedStyles.iconDescriptiveTeal,
      },
      onPress: () => onQuickLoginPress(biometricType),
      renderCustomTrailingIcon: () => (
        <BrandToggle
          testId=""
          value={bioEnabled}
          containerStyle={themedStyles.paddingVertical0}
        />
      ),
    };
    const pinRecord: ProfileSettingItemDataType = {
      id: '2',
      title: 'تفعيل الرمز السري',
      iconProps: {
        name: 'Lock',
        containerStyle: themedStyles.iconDescriptiveYellow,
      },
      onPress: () => onQuickLoginPress('PIN_CODE'),
      renderCustomTrailingIcon: () => (
        <BrandToggle
          testId=""
          value={pinEnabled}
          containerStyle={themedStyles.paddingVertical0}
        />
      ),
    };
    if (biometricType) {
      return [bioRecord, pinRecord];
    }
    return [pinRecord];
  }, [bioEnabled, bioIcon, pinEnabled]);

  const onLogoutSuccess = () => {
    deleteKey(STORAGE_KEYS.REFRESH_TOKEN);
    navigation.resetToStack('Auth', 'Login');
  };
  const { mutate: logout } = useLogout(onLogoutSuccess);

  return (
    <Page
      testId={screenTestId}
      isLoading={isRemovePending || isRemovePinPending || isSetPending}
      pageHeaderProps={{ titleProps: { text: 'Settings' } }}>
      <GlassModal
        testId={screenTestId}
        visible={langModalVisible}
        headlineProps={{ text: 'Change to English' }}
        paragraphProps={{
          text: 'We will need to restart the application for a seamless experience',
        }}
        buttonProps={{ textProps: { text: 'Switch' }, onPress: toggleLanguage }}
        secondaryButtonProps={{
          textProps: { text: 'Back' },
          onPress: () => setLangModalVisible(false),
        }}
      />
      <GlassModal
        testId={screenTestId}
        visible={logoutModalVisible}
        headlineProps={{ text: 'تسجيل خروج' }}
        paragraphProps={{
          text: 'هل انت متأكد من تسجيل الخروج ؟',
        }}
        buttonProps={{
          textProps: { text: 'تسجيل خروج' },
          onPress: () => logout({ email }),
        }}
        secondaryButtonProps={{
          textProps: { text: 'رجوع' },
          onPress: () => setLogoutModalVisible(false),
        }}
      />
      <GlassModal
        testId={screenTestId}
        visible={changeQuickLoginVisible}
        headlineProps={{ text: 'تغيير طريقة الدخول؟' }}
        paragraphProps={{
          text: 'سيتم إلغاء تفعيل الرمز السري (PIN) وتفعيل بصمة الوجه. هل أنت متأكد؟',
        }}
        buttonProps={{
          textProps: { text: 'تفعيل بصمة الوجة' },
          onPress: changeQuickLoginFn,
        }}
        secondaryButtonProps={{
          textProps: { text: 'رجوع' },
          onPress: () => setChangeQuickLoginVisible(false),
        }}
      />

      <Spacer space="3xl" />
      <Headline testId={screenTestId} text="الإعدادات الخاصة" />
      <List<ProfileSettingItemDataType>
        testId={screenTestId}
        data={personalSettings}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
      <Spacer space="3xl" />
      <Headline testId={screenTestId} text="إعدادات الإمان" />
      <List<ProfileSettingItemDataType>
        testId={screenTestId}
        data={securitySettings}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
      <Spacer space="3xl" />
      <ProfileSettingItem
        iconProps={{
          name: 'LogOut',
          containerStyle: themedStyles.iconDescriptiveTransparent,
          isRTLMirrored: true,
        }}
        textProps={{
          text: 'تسجيل الخروج',
        }}
        testId={screenTestId}
        onPress={() => setLogoutModalVisible(true)}
        hasForwardIcon={false}
      />
    </Page>
  );
};

export default ProfileSettings;
