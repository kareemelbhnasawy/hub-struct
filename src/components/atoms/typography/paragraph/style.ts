import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';
import { fontWeights } from '@/theme/theme-fonts';
import { getFont } from '@/utilities';

export const styles = StyleSheet.create({
  paragraph: responsiveHandler({
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
  xl: responsiveHandler({
    base: {
      fontSize: 16,
      lineHeight: 20,
    },
    tablet: {
      fontSize: 14,
      lineHeight: 20,
    },
    mobile: {
      fontSize: 12,
      lineHeight: 18,
    },
  }),
  lg: responsiveHandler({
    base: {
      fontSize: 14,
      lineHeight: 18,
    },
    tablet: {
      fontSize: 12,
      lineHeight: 16,
    },
    mobile: {
      fontSize: 11,
      lineHeight: 14,
    },
  }),
  md: responsiveHandler({
    base: {
      fontSize: 12,
      lineHeight: 16,
    },
    tablet: {
      fontSize: 11,
      lineHeight: 14,
    },
    mobile: {
      fontSize: 10,
      lineHeight: 12,
    },
  }),
  sm: responsiveHandler({
    base: {
      fontSize: 11,
      lineHeight: 12,
    },
    tablet: {
      fontSize: 11,
      lineHeight: 12,
    },
    mobile: {
      fontSize: 11,
      lineHeight: 10,
    },
  }),
});
