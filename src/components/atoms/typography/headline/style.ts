import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';
import { fontWeights } from '@/theme/theme-fonts';

export const styles = StyleSheet.create({
  headline: responsiveHandler({
    base: {
      color: 'textPrimary',
    },
  }),
  Thin: responsiveHandler({
    base: {
      fontWeight: fontWeights.Thin,
    },
  }),
  Light: responsiveHandler({
    base: {
      fontWeight: fontWeights.Light,
    },
  }),
  Regular: responsiveHandler({
    base: {
      fontWeight: fontWeights.Regular,
    },
  }),
  Medium: responsiveHandler({
    base: {
      fontWeight: fontWeights.Medium,
    },
  }),
  Semibold: responsiveHandler({
    base: {
      fontWeight: fontWeights.Semibold,
    },
  }),
  Bold: responsiveHandler({
    base: {
      fontWeight: fontWeights.Bold,
    },
  }),
  Title: responsiveHandler({
    base: {
      fontWeight: fontWeights.Title,
    },
  }),
  '2xl': responsiveHandler({
    base: {
      fontSize: 48,
      lineHeight: 52,
    },
  }),
  xl: responsiveHandler({
    base: {
      fontSize: 36,
      lineHeight: 40,
    },
  }),
  lg: responsiveHandler({
    base: {
      fontSize: 32,
      lineHeight: 36,
    },
  }),
  md: responsiveHandler({
    base: {
      fontSize: 24,
      lineHeight: 28,
    },
  }),
  sm: responsiveHandler({
    base: {
      fontSize: 20,
      lineHeight: 24,
    },
  }),
  xs: responsiveHandler({
    base: {
      fontSize: 18,
      lineHeight: 22,
    },
  }),
});
