import { View } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import { Headline, Paragraph, Spacer } from '@/components/atoms';
import {
  Avatar,
  BaseButton,
  BrandToggle,
  GlassModal,
  TextInput,
} from '@/components/molecules';
import { useEffect, useState } from 'react';
import { useProfileStore } from '@/store/profile';
import useEditKunya from '@/network/services/profile/edit-kunya/edit-kunya.hook';
import { useAuthStore } from '@/store/auth';
import { useNavigation } from '@/hooks';
import log from '@/utilities/log';

const KunyaCrudScreen = () => {
  const screenTestId = 'kunya-crud-screen';
  const { getFullName, getAvatarUrl, getDepartment, getJobTitle, setKunya } =
    useProfileStore();
  const { getEmail } = useAuthStore();
  const { name, kunya } = getFullName();
  const [kunyaValue, setKunyaValue] = useState<string>(kunya);
  const avatarUrl = getAvatarUrl();
  const department = getDepartment();
  const jobTitle = getJobTitle();
  const [displayName, setDisplayName] = useState<string>(
    kunya ? `${kunya} (${name})` : name,
  );
  const displayTitle = `${jobTitle} - ${department}`;
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [isToggleActive, setIsToggleActive] = useState(!!kunya);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isKunyaActivated = !!kunya;
  const { navigate } = useNavigation();

  const navigateToSettings = () => {
    navigate('Profile', {});
  };

  const showSuccessToast = () => {
    return {
      text: isKunyaActivated
        ? 'profile.kunya.kunyaUpdated'
        : 'profile.kunya.kunyaActivated',
      textProps: { size: 'xl', weight: 'Medium' },
    };
  };

  const { mutate: editKunya } = useEditKunya(
    navigateToSettings,
    (error) => {
      log(error);
    },
    showSuccessToast,
  );

  const handleOnSavePress = () => {
    setKunya(kunyaValue);
    editKunya({ email: getEmail(), nickname: kunyaValue });
  };

  const handleDeleteKunya = () => {
    setKunya('');
    //integrate with delete modal
  };

  useEffect(() => {
    setDisplayName(kunyaValue ? `${kunyaValue} (${name})` : name);
  }, [kunyaValue, name]);

  useEffect(() => {
    if (isKunyaActivated && !isToggleActive) {
      setIsModalVisible(true);
    }
  }, [isToggleActive, isKunyaActivated]);

  return (
    <Page testId={screenTestId} hasHeader={false} isLoading={false}>
      <View style={themedStyles.container}>
        <Spacer space={40} />
        <View style={themedStyles.toggleSectionWrapper}>
          <View style={themedStyles.headlineWrapper}>
            <Headline
              size="2xs"
              weight="Semibold"
              text="profile.kunya.activateKunya"
              testId={screenTestId}
            />
            <Paragraph
              text="profile.kunya.activateKunyaSubtitle"
              testId={screenTestId}
            />
          </View>
          <BrandToggle
            value={isToggleActive}
            testId={screenTestId}
            onValueChange={setIsToggleActive}
          />
        </View>

        <Spacer space={30} />
        {isToggleActive && (
          <View>
            <TextInput
              testId={screenTestId}
              value={kunyaValue}
              onChangeValue={setKunyaValue}
              labelProps={{
                text: 'profile.kunya.kunyaPrompt',
                size: '2xs',
                weight: 'Medium',
              }}
              isRequired
              placeholder="ابو ألفطي"
            />

            <Spacer space={30} />

            <View style={themedStyles.kunyaPreviewWrapper}>
              <Headline
                text="profile.kunya.howKunyaAppears"
                weight="Medium"
                size="2xs"
                testId={screenTestId}
              />
              <Avatar
                size="lg"
                image={avatarUrl ?? null}
                name={name}
                status={'active'}
                testId={screenTestId}
              />
              <View style={themedStyles.isCentered}>
                <Headline
                  text={displayName}
                  weight="Bold"
                  size="xs"
                  testId={screenTestId}
                />
                <Paragraph
                  text={displayTitle}
                  weight="Medium"
                  size="lg"
                  testId={screenTestId}
                />
              </View>
            </View>
            <Spacer space={40} />
            <BaseButton
              testId={screenTestId}
              textProps={{ text: 'Save' }}
              onPress={handleOnSavePress}
            />
          </View>
        )}
      </View>
      <GlassModal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        testId={screenTestId}
        headlineProps={{
          text: 'profile.kunya.deactivateKunya',
          weight: 'Semibold',
          size: 'sm',
        }}
        paragraphProps={{
          text: 'profile.kunya.deactivateKunyaPrompt',
          weight: 'Medium',
          size: 'xl',
        }}
        buttonProps={{
          textProps: {
            text: 'profile.deactivate'
          },
          onPress: handleDeleteKunya
        }}
        secondaryButtonProps={{
          textProps: {
            text: 'profile.back'
          },
          onPress: () => setIsModalVisible(false)
        }} title={''}        // isVisible={isModalVisible}
        // onBackdropPress={() => setIsModalVisible(false)}
      />
    </Page>
  );
};

export default KunyaCrudScreen;
