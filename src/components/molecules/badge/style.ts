import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';
import { fontWeights } from '@/theme/theme-fonts';

export const styles = StyleSheet.create({
  // Container styles
  badgeContainer: responsiveHandler({
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderWidth: 1, // Add border width
    },
  }),

  // Container variant styles
  containerNumber: responsiveHandler({
    base: {
      borderRadius: 12, // Same radius for all number sizes
      minWidth: 20,
      minHeight: 20,
    },
  }),
  containerLabel: responsiveHandler({
    base: {
      borderRadius: 6, // Different radius for labels
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
  }),

  // Container size styles for labels (numbers use same border radius)
  containerLabelSm: responsiveHandler({
    base: {
      borderRadius: 4,
      paddingHorizontal: 6,
      paddingVertical: 2,
    },
  }),
  containerLabelMd: responsiveHandler({
    base: {
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
  }),
  containerLabelLg: responsiveHandler({
    base: {
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 6,
    },
  }),

  // Text styles
  text: responsiveHandler({
    base: {
      fontWeight: '500',
    },
  }),

  // Variant text styles
  textNumber: responsiveHandler({
    base: {
      fontWeight: fontWeights.Bold,
      textAlign: 'center',
    },
  }),
  textLabel: responsiveHandler({
    base: {
      fontWeight: fontWeights.Medium,
    },
  }),

  // Text size styles
  textSm: responsiveHandler({
    base: {
      fontSize: 11,
      lineHeight: 12,
    },
  }),
  textMd: responsiveHandler({
    base: {
      fontSize: 12,
      lineHeight: 16,
    },
  }),
  textLg: responsiveHandler({
    base: {
      fontSize: 14,
      lineHeight: 18,
    },
  }),

  // Number specific text sizes
  textNumberSm: responsiveHandler({
    base: {
      fontSize: 14,
      lineHeight: 18,
    },
  }),
  textNumberMd: responsiveHandler({
    base: {
      fontSize: 16,
      lineHeight: 20,
    },
  }),
  textNumberLg: responsiveHandler({
    base: {
      fontSize: 18,
      lineHeight: 22,
    },
  }),

  // Background color styles using theme colors
  backgroundBrand: responsiveHandler({
    base: {
      backgroundColor: 'badgeDefaultBackground',
      borderColor: 'textPrimary', // Add matching border color
    },
  }),
  backgroundSuccess: responsiveHandler({
    base: {
      backgroundColor: 'badgeSuccessBackground',
      borderColor: 'badgeSuccessText', // Add matching border color
    },
  }),
  backgroundWarning: responsiveHandler({
    base: {
      backgroundColor: 'badgeWarningBackground',
      borderColor: 'badgeWarningText', // Add matching border color
    },
  }),
  backgroundError: responsiveHandler({
    base: {
      backgroundColor: 'badgeErrorBackground',
      borderColor: 'badgeErrorText', // Add matching border color
    },
  }),
  backgroundGray: responsiveHandler({
    base: {
      backgroundColor: 'badgeDefaultBackground',
      borderColor: 'badgeDefaultText', // Add matching border color
    },
  }),

  // Text color styles using theme colors
  textColorBrand: responsiveHandler({
    base: {
      color: 'textPrimary',
    },
  }),
  textColorSuccess: responsiveHandler({
    base: {
      color: 'badgeSuccessText',
    },
  }),
  textColorWarning: responsiveHandler({
    base: {
      color: 'badgeWarningText',
    },
  }),
  textColorError: responsiveHandler({
    base: {
      color: 'badgeErrorText',
    },
  }),
  textColorGray: responsiveHandler({
    base: {
      color: 'badgeDefaultText',
    },
  }),
});
