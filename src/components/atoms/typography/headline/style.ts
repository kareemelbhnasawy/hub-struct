import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';
import { fontWeights } from '@/theme/theme-fonts';
import { getFont } from '@/utilities';

export const styles = StyleSheet.create({
  headline: responsiveHandler({
    base: {
      color: 'textPrimary',
    },
  }),
  Thin: responsiveHandler({
    base: {
      fontFamily: getFont(fontWeights.Thin),
    },
  }),
  Light: responsiveHandler({
    base: {
      fontFamily: getFont(fontWeights.Light),
    },
  }),
  Regular: responsiveHandler({
    base: {
      fontFamily: getFont(fontWeights.Regular),
    },
  }),
  Medium: responsiveHandler({
    base: {
      fontFamily: getFont(fontWeights.Medium),
    },
  }),
  Semibold: responsiveHandler({
    base: {
      fontFamily: getFont(fontWeights.Semibold),
    },
  }),
  Bold: responsiveHandler({
    base: {
      fontFamily: getFont(fontWeights.Bold),
    },
  }),
  Title: responsiveHandler({
    base: {
      fontFamily: getFont(fontWeights.Title),
    },
  }),
  '2xl': responsiveHandler({
    base: {
      fontSize: 48,
      lineHeight: 52,
    },
    tablet: {
      fontSize: 36,
      lineHeight: 48,
    },
    mobile: {
      fontSize: 32,
      lineHeight: 40,
    },
  }),
  xl: responsiveHandler({
    base: {
      fontSize: 36,
      lineHeight: 40,
    },
    tablet: {
      fontSize: 30,
      lineHeight: 40,
    },
    mobile: {
      fontSize: 24,
      lineHeight: 32,
    },
  }),
  lg: responsiveHandler({
    base: {
      fontSize: 32,
      lineHeight: 36,
    },
    tablet: {
      fontSize: 32,
      lineHeight: 32,
    },
    mobile: {
      fontSize: 32,
      lineHeight: 28,
    },
  }),
  md: responsiveHandler({
    base: {
      fontSize: 24,
      lineHeight: 28,
    },
    tablet: {
      fontSize: 20,
      lineHeight: 28,
    },
    mobile: {
      fontSize: 18,
      lineHeight: 24,
    },
  }),
  sm: responsiveHandler({
    base: {
      fontSize: 20,
      lineHeight: 24,
    },
    tablet: {
      fontSize: 18,
      lineHeight: 26,
    },
    mobile: {
      fontSize: 16,
      lineHeight: 24,
    },
  }),
  xs: responsiveHandler({
    base: {
      fontSize: 18,
      lineHeight: 22,
    },
    tablet: {
      fontSize: 16,
      lineHeight: 24,
    },
    mobile: {
      fontSize: 14,
      lineHeight: 20,
    },
  }),
});
