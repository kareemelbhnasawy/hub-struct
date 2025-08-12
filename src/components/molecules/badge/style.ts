import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';
import { fontWeights } from '@/theme/theme-fonts';
import { COLORS } from '@/style';

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
      color: COLORS['primary-600'], // #0F3144 from Figma
    },
  }),
  success: responsiveHandler({
    base: {
      color: COLORS['success-700'], // #067647 from Figma
    },
  }),
  warning: responsiveHandler({
    base: {
      color: COLORS['warning-700'], // #B54708 from Figma
    },
  }),
  error: responsiveHandler({
    base: {
      color: COLORS['error-600'], // #D92D20 from Figma
    },
  }),
  gray: responsiveHandler({
    base: {
      color: COLORS['neutral-700'], // #384250 from Figma for labels
    },
  }),
  grayNumber: responsiveHandler({
    base: {
      color: COLORS['secondary-dark-gray-800'], // #575757 from Figma for numbers
    },
  }),
});
