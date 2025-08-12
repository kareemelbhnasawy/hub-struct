import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';
import { fontWeights } from '@/theme/theme-fonts';
import { getThemeColor } from '@/theme/theme-colors';

export const styles = StyleSheet.create({
  badge: responsiveHandler({
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'HRSD Gov',
    },
  }),

  // Variant styles
  number: responsiveHandler({
    base: {
      fontWeight: fontWeights.Bold,
      textAlign: 'center',
    },
  }),
  label: responsiveHandler({
    base: {
      fontWeight: fontWeights.Medium,
    },
  }),

  // RTL styles
  rtl: responsiveHandler({
    base: {
      textAlign: 'right',
    },
  }),
  ltr: responsiveHandler({
    base: {
      textAlign: 'left',
    },
  }),

  // Size styles
  sm: responsiveHandler({
    base: {
      fontSize: 11,
      lineHeight: 12,
    },
  }),
  md: responsiveHandler({
    base: {
      fontSize: 12,
      lineHeight: 16,
    },
  }),
  lg: responsiveHandler({
    base: {
      fontSize: 14,
      lineHeight: 18,
    },
  }),

  // Number specific sizes
  numberSm: responsiveHandler({
    base: {
      fontSize: 14,
      lineHeight: 18,
    },
  }),
  numberMd: responsiveHandler({
    base: {
      fontSize: 16,
      lineHeight: 20,
    },
  }),
  numberLg: responsiveHandler({
    base: {
      fontSize: 18,
      lineHeight: 22,
    },
  }),

  // Color styles
  brand: responsiveHandler({
    base: {
      color: getThemeColor('textPrimary'),
    },
  }),
  success: responsiveHandler({
    base: {
      color: getThemeColor('textSuccess'),
    },
  }),
  warning: responsiveHandler({
    base: {
      color: getThemeColor('textWarning'),
    },
  }),
  error: responsiveHandler({
    base: {
      color: getThemeColor('textError'),
    },
  }),
  gray: responsiveHandler({
    base: {
      color: getThemeColor('textDisplay'),
    },
  }),
});
