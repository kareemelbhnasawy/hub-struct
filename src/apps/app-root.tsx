/* eslint-disable */
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import {
  CurvedHeroImage,
  Headline,
  LucideIcon,
  Spacer,
} from '@/components/atoms';
import { useTranslate } from '@/hooks';
import { crash, getCrashlytics } from '@react-native-firebase/crashlytics';
import { useThemeStore } from '@/store/theme';
import ListDemo from '@/components/organisms/list/demo';
import { GlassContainer } from '@/components/atoms/glass-container';
import { Radius } from '@/style';
import { BaseButton, LinkButton } from '@/components/molecules';

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

        <Spacer space={20} />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flexDirection: 'column', gap: 5 }}>
            <LinkButton
              textProps={{ text: 'Small Link Button', testId: 'Secondary-btn' }}
              size="sm"
            />
            <LinkButton
              textProps={{ text: 'Medium Link Button', testId: 'Secondary-btn' }}
              size="md"
            />
            <LinkButton
              textProps={{ text: 'Large Link Button', testId: 'Secondary-btn' }}
              size="lg"
            />
            <LinkButton
              textProps={{ text: 'XL Link Button', testId: 'Secondary-btn' }}
              size="xl"
            />
            <LinkButton
              textProps={{ text: 'XXL Link Button', testId: 'Secondary-btn' }}
              size="xxl"
              disabled
            />
          </View>
        </View>

        <Spacer space={20} />

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flexDirection: 'column', gap: 5 }}>
            <Text>Primary Button</Text>
            <BaseButton
              textProps={{ text: 'Small', testId: 'Secondary-btn' }}
              size="sm"
              variant="primary" testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'Md Loading', testId: 'Secondary-btn' }}
              size="md"
              variant="primary"
              loading
              rightIcon={{
                name: 'ArrowRight',
                size: 12,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'Lg Success', testId: 'Secondary-btn' }}
              size="lg"
              variant="primary"
              success
              leftIcon={{
                name: 'Check',
                size: 15,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'XL', testId: 'Secondary-btn' }}
              size="xl"
              variant="primary"
              leftIcon={{
                name: 'ArrowLeft',
                size: 16,
                testId: 'arrow-left-icon',
              }}
              rightIcon={{
                name: 'ArrowRight',
                size: 16,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'XXL Disabled', testId: 'Secondary-btn' }}
              size="xxl"
              variant="primary"
              disabled
              rightIcon={{
                name: 'ArrowRight',
                size: 16,
                testId: 'arrow-right-icon',
              }} testId={''}            />
          </View>
          <View style={{ flexDirection: 'column', gap: 5 }}>
            <Text>Primary Danger Button</Text>
            <BaseButton
              textProps={{ text: 'Small', testId: 'Secondary-btn' }}
              size="sm"
              variant="primary"
              danger testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'Md Loading', testId: 'Secondary-btn' }}
              size="md"
              variant="primary"
              loading
              danger
              rightIcon={{
                name: 'ArrowRight',
                size: 12,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'Lg Success', testId: 'Secondary-btn' }}
              size="lg"
              variant="primary"
              success
              danger
              leftIcon={{
                name: 'Check',
                size: 15,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'XL', testId: 'Secondary-btn' }}
              size="xl"
              variant="primary"
              danger
              leftIcon={{
                name: 'ArrowLeft',
                size: 16,
                testId: 'arrow-left-icon',
              }}
              rightIcon={{
                name: 'ArrowRight',
                size: 16,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'XXL Disabled', testId: 'Secondary-btn' }}
              size="xxl"
              danger
              variant="primary"
              disabled
              rightIcon={{
                name: 'ArrowRight',
                size: 16,
                testId: 'arrow-right-icon',
              }} testId={''}            />
          </View>
        </View>

        <Spacer space={20} />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flexDirection: 'column', gap: 5 }}>
            <Text>Secondary Button</Text>
            <BaseButton
              textProps={{ text: 'Small', testId: 'Secondary-btn' }}
              size="sm"
              variant="secondary" testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'Md Loading', testId: 'Secondary-btn' }}
              size="md"
              variant="secondary"
              loading
              rightIcon={{
                name: 'ArrowRight',
                size: 12,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'Lg Success', testId: 'Secondary-btn' }}
              size="lg"
              variant="secondary"
              success
              leftIcon={{
                name: 'Check',
                size: 15,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'XL', testId: 'Secondary-btn' }}
              size="xl"
              variant="secondary"
              leftIcon={{
                name: 'ArrowLeft',
                size: 16,
                testId: 'arrow-left-icon',
              }}
              rightIcon={{
                name: 'ArrowRight',
                size: 16,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'XXL Disabled', testId: 'Secondary-btn' }}
              size="xxl"
              variant="secondary"
              disabled
              rightIcon={{
                name: 'ArrowRight',
                size: 16,
                testId: 'arrow-right-icon',
              }} testId={''}            />
          </View>
          <View style={{ flexDirection: 'column', gap: 5 }}>
            <Text>Secondary Danger Button</Text>
            <BaseButton
              textProps={{ text: 'Small', testId: 'Secondary-btn' }}
              size="sm"
              variant="secondary"
              danger testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'Md Loading', testId: 'Secondary-btn' }}
              size="md"
              variant="secondary"
              loading
              danger
              rightIcon={{
                name: 'ArrowRight',
                size: 12,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'Lg Success', testId: 'Secondary-btn' }}
              size="lg"
              variant="secondary"
              success
              danger
              leftIcon={{
                name: 'Check',
                size: 15,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'XL', testId: 'Secondary-btn' }}
              size="xl"
              variant="secondary"
              danger
              leftIcon={{
                name: 'ArrowLeft',
                size: 16,
                testId: 'arrow-left-icon',
              }}
              rightIcon={{
                name: 'ArrowRight',
                size: 16,
                testId: 'arrow-right-icon',
              }} testId={''}            />
            <Spacer />
            <BaseButton
              textProps={{ text: 'XXL Disabled', testId: 'Secondary-btn' }}
              size="xxl"
              danger
              variant="secondary"
              disabled
              rightIcon={{
                name: 'ArrowRight',
                size: 16,
                testId: 'arrow-right-icon',
              }} testId={''}            />
          </View>
        </View>

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
        <ListDemo />
        {/* <BadgeDemo /> */}
      </ScrollView>
    </>
  );
};

export default AppRoot;
