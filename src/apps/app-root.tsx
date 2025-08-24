/* eslint-disable */
import { Pressable, ScrollView, Text, View } from 'react-native';
import {
  CurvedHeroImage,
  Headline,
  LucideIcon,
  Paragraph,
} from '@/components/atoms';
import { useTranslate } from '@/hooks';
import { crash, getCrashlytics } from '@react-native-firebase/crashlytics';
import { useThemeStore } from '@/store/theme';
import { GlassContainer } from '@/components/atoms/glass-container';
import { Radius } from '@/style';
import Form from '@/components/templates/form/form.component';
import FormInputTypes from '@/components/templates/form/constants';
import { useCallback } from 'react';

const AppRoot = () => {
  const { changeLanguage, locale } = useTranslate();
  const crashlytics = getCrashlytics();
  const { toggleTheme } = useThemeStore();

  const stickyBottom = useCallback(() => {
    return <Paragraph testId="sticky-bottom" text="Sticky Bottom!" />;
  }, []);

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

        <Form
          fields={[
            {
              name: 'field1',
              type: FormInputTypes.TextInput,
              testId: `field1-input`,
              placeholder: 'placeholder',
              labelProps: { text: 'Text input label' },
              validation: { required: true, digitsOnly: true, min: 7 },
            },
            {
              name: 'field2',
              type: FormInputTypes.PasswordInput,
              testId: `field2-input`,
              placeholder: 'placeholder',
              labelProps: { text: 'Text input label' },
            },
            {
              name: 'field3',
              type: FormInputTypes.SelectInput,
              testId: `field2-input`,
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
              testId: `field2-input`,
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
        {/* <BadgeDemo /> */}
      </ScrollView>
    </>
  );
};

export default AppRoot;
