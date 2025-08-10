import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';
import { fontWeights } from '@/theme/theme-fonts';

export const styles = StyleSheet.create({
  paragraph: responsiveHandler({
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
  xl: responsiveHandler({
    base: {
      fontSize: 16,
      lineHeight: 20,
    },
  }),
  lg: responsiveHandler({
    base: {
      fontSize: 14,
      lineHeight: 18,
    },
  }),
  md: responsiveHandler({
    base: {
      fontSize: 12,
      lineHeight: 16,
    },
  }),
  sm: responsiveHandler({
    base: {
      fontSize: 11,
      lineHeight: 12,
    },
  }),
});
