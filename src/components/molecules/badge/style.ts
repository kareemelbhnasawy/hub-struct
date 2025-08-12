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

  // Color styles - matching Figma design colors
  brand: responsiveHandler({
    base: {
      color: '#0F3144', // Primary-600 from Figma
    },
  }),
  success: responsiveHandler({
    base: {
      color: '#067647', // Success-700 from Figma
    },
  }),
  warning: responsiveHandler({
    base: {
      color: '#B54708', // Warning-700 from Figma
    },
  }),
  error: responsiveHandler({
    base: {
      color: '#D92D20', // Error-600 from Figma
    },
  }),
  gray: responsiveHandler({
    base: {
      color: '#384250', // Neutral-700 from Figma for labels, #575757 for numbers
    },
  }),
});
