/* eslint-disable */
import { CurvedHeroImage, Headline, LucideIcon } from '@/components/atoms';
import { GlassContainer } from '@/components/atoms/glass-container';
import { Form } from '@/components/templates';
import FormInputTypes from '@/components/templates/form/constants';
import { useTranslate } from '@/hooks';
import { useThemeStore } from '@/store/theme';
import { Radius } from '@/style';
import PinCodeInput from '@/components/molecules/pin-code';
import { crash, getCrashlytics } from '@react-native-firebase/crashlytics';
import { Pressable, ScrollView, Text, View } from 'react-native';

const AppRoot = () => {
  const { changeLanguage, locale } = useTranslate();
  const crashlytics = getCrashlytics();
  const { toggleTheme } = useThemeStore();
  return (
    <>
      <ScrollView>
        <CurvedHeroImage testId={'test'}>
          <View
            style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <GlassContainer testId="samya" borderRadius={Radius.LG}>
              <Headline text="Test Glass Container" weight="Bold" testId={''} />
            </GlassContainer>
            <GlassContainer testId="icon" containerStyle={{ aspectRatio: 1 }}>
              <LucideIcon name="X" testId={''} />
            </GlassContainer>
          </View>
        </CurvedHeroImage>
        <Headline text="common.welcome" testId={''} />
        <PinCodeInput
          onPinComplete={(pin) => console.log(pin)}
          testId={''}
          errorProps={{ text: 'samya' }}
        />

        <Form
          fields={[
            {
              name: 'field1',
              type: FormInputTypes.TextInput,
              placeholder: 'placeholder',
              labelProps: { text: 'Text input label' },
              validation: { required: true, digitsOnly: true, max: 0, min: 0 },
            },
            {
              name: 'field2',
              type: FormInputTypes.PasswordInput,
              placeholder: 'placeholder',
              labelProps: { text: 'Text input label' },
            },
            {
              name: 'field3',
              type: FormInputTypes.SelectInput,
              placeholder: 'placeholder',
              labelProps: { text: 'Text input label' },
              items: [
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
              ],
            },
            {
              name: 'field4',
              type: FormInputTypes.DateInput,
              placeholder: 'placeholder',
              labelProps: { text: 'Text input label' },
            },
          ]}
          testId={''}
          onSubmit={(values) => console.log(values)}
        />

        <Pressable
          onPress={() => {
            toggleTheme();
          }}>
          <Text>Toggle Theme</Text>
        </Pressable>
        <Pressable onPress={() => crash(crashlytics)}>
          <Text>CRASH MY APP</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage(locale === 'ar' ? 'en' : 'ar')}>
          <Text>Toggle Lang</Text>
        </Pressable>
      </ScrollView>
    </>
  );
};

export default AppRoot;
