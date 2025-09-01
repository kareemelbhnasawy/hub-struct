import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import { useNavigation, useTranslate } from '@/hooks';
import { Page } from '@/components/templates';
import { useAuthStore } from '@/store/auth';
import { BaseButton, BaseSheet } from '@/components/molecules';
import { useState } from 'react';
import { SnapPoints } from '@/components/molecules/base-sheet/constants';
import { SelectionGroup } from '@/components/organisms';
import { AddressCard } from '../partials';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import { View } from 'react-native';
import { openLink } from '@/utilities';

const ProfileDetailsScreen = () => {
  const nav = useNavigation<'Profile'>(); // TRoute is 'Profile'
  const screenTestId = 'profile-screen';
  const { userId } = nav.params; // strongly typed
  const { locale } = useTranslate();
  const { email } = useAuthStore();
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const error = false;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('RRRD2929');

  const data = [
    {
      addressId: 'RRRD2929',
      addressDesc: '2929, ريحانة بنت زيد، حي العارض، الرياض',
      badgeText: 'العنوان المسجل في العقد',
    },
    {
      addressId: 'RRRD8416',
      addressDesc: '8416 شارع الملك فهد، حي المروج، الرياض',
    },
    {
      addressId: 'RRRD5431',
      addressDesc: '5431 شارع التخصصي، حي العليا، الرياض',
    },
  ];

  return (
    <Page testId={screenTestId}>
      <BaseSheet
        testId={`${screenTestId}-edit-address`}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        snapPoints={SnapPoints.XL}
        titleProps={{ text: 'profile.editAddress' }}>
        <View style={themedStyles.warningContainer}>
          <LucideIcon
            testId={`${screenTestId}-edit-address`}
            name="MapPin"
            isCircle
            containerStyle={themedStyles.iconContainer}
          />
          <Spacer />
          <View>
            <Paragraph
              testId={`${screenTestId}-edit-address-warning`}
              text="profile.contractAddress"
            />
            <Spacer space="xs" />
            <Headline
              testId={`${screenTestId}-edit-address-warning`}
              size="xs"
              text="2929, ريحانة بنت زيد، حي العارض، الرياض"
            />
          </View>
        </View>
        <Spacer space="xs" />

        <Headline
          testId={`${screenTestId}-edit-address`}
          text="profile.chooseAddress"
          size="xs"
          weight="Medium"
        />
        <Spacer space="xs" />
        <Paragraph
          testId={`${screenTestId}-edit-address`}
          text="profile.chooseAddressDesc"
          size="xl"
        />
        <Spacer space="xl" />
        <SelectionGroup
          testId={`${screenTestId}-edit-address`}
          data={data}
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
          isError={error}
          value={selectedAddress}
          onChangeValue={setSelectedAddress}
          valueKey={'addressId'}
          spacerProps={{ space: 'xl' }}
          keyExtractor={({ item }) => item.addressId}
          renderItem={({ item }) => (
            <AddressCard
              testId={`${screenTestId}-${item.addressId}`}
              addressIdProps={{ text: item.addressId }}
              addressDescProps={{ text: item.addressDesc }}
              badgeProps={
                item?.badgeText
                  ? { paragraphProps: { text: item.badgeText } }
                  : undefined
              }
            />
          )}
          renderSelectedItem={({ item }) => (
            <AddressCard
              testId={`${screenTestId}-${item.addressId}`}
              addressIdProps={{ text: item.addressId }}
              addressDescProps={{ text: item.addressDesc }}
              badgeProps={
                item?.badgeText
                  ? { paragraphProps: { text: item.badgeText } }
                  : undefined
              }
              isFocused
            />
          )}
        />
      </BaseSheet>
      <Headline text="Profile Screen" weight="Bold" testId="profile-title" />
      <Paragraph text="This is your profile page!" testId="profile-subtitle" />
      <Paragraph testId="" text={'User ID: ' + userId} />
      <Paragraph testId={''} text={'Email: ' + email} />
      <Paragraph testId="" text={'Current Language: ' + locale} />
      <Spacer />
      <BaseButton
        testId={''}
        textProps={{ text: 'Go to Quick Login' }}
        onPress={() => nav.navigateTo('QuickLogin')}
      />
      <Spacer />
      <BaseButton
        testId={''}
        textProps={{ text: 'Edit address' }}
        onPress={() => setModalVisible(true)}
      />
      <Spacer />
    </Page>
  );
};

export default ProfileDetailsScreen;
