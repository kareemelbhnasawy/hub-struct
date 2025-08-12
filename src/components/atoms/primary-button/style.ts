import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';

export const styles = {
  base: StyleSheet.create({
    button: responsiveHandler({
      base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        minHeight: 44,
      },
    }),
    xxl: responsiveHandler({
      base: {
        paddingVertical: 48,
        paddingHorizontal: 64,
        gap: 16,
        borderRadius: 28,
      },
    }),
    xl: responsiveHandler({
      base: {
        paddingVertical: 32,
        paddingHorizontal: 48,
        gap: 12,
        borderRadius: 28,
      },
    }),
    lg: responsiveHandler({
      base: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        gap: 8,
        borderRadius: 16,
      },
    }),
    md: responsiveHandler({
      base: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        gap: 8,
        borderRadius: 10,
      },
    }),
    sm: responsiveHandler({
      base: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        gap: 4,
        borderRadius: 8,
      },
    }),
  }),
  primary: StyleSheet.create({
    default: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryDefaultBackground',
        borderColor: 'buttonPrimaryDefaultBackground',
        color: 'buttonPrimaryDefaultLabel',
      },
    }),
    hover: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryHoverBackground',
        borderColor: 'buttonPrimaryHoverBackground',
        color: 'buttonPrimaryHoverLabel',
      },
    }),
    focused: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryFocusedBackground',
        borderColor: 'buttonPrimaryFocusedBorder',
        color: 'buttonPrimaryFocusedLabel',
      },
    }),
    pressed: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryPressedBackground',
        borderColor: 'buttonPrimaryPressedBorder',
        color: 'buttonPrimaryPressedLabel',
      },
    }),
    disabled: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryDisabledBackground',
        borderColor: 'buttonPrimaryDisabledBorder',
        color: 'buttonPrimaryDisabledLabel',
      },
    }),
    loading: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryLoadingBackground',
        borderColor: 'buttonPrimaryLoadingBackground',
      },
    }),
    error: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryErrorBackground',
        borderColor: 'buttonPrimaryErrorBackground',
        color: 'buttonPrimaryErrorLabel',
      },
    }),
  }),
  secondary: StyleSheet.create({
    default: responsiveHandler({
      base: {
        backgroundColor: 'buttonSecondaryDefaultBackground',
        borderColor: 'buttonSecondaryDefaultBackground',
        color: 'buttonSecondaryDefaultLabel',
      },
    }),
    hover: responsiveHandler({
      base: {
        backgroundColor: 'buttonSecondaryHoverBackground',
        borderColor: 'buttonSecondaryHoverBackground',
        color: 'buttonSecondaryHoverLabel',
      },
    }),
    focused: responsiveHandler({
      base: {
        backgroundColor: 'buttonSecondaryFocusedBackground',
        borderColor: 'buttonSecondaryFocusedBorder',
        color: 'buttonSecondaryFocusedLabel',
      },
    }),
    pressed: responsiveHandler({
      base: {
        backgroundColor: 'buttonSecondaryPressedBackground',
        borderColor: 'buttonSecondaryPressedBorder',
        color: 'buttonSecondaryPressedLabel',
      },
    }),
    disabled: responsiveHandler({
      base: {
        backgroundColor: 'buttonSecondaryDisabledBackground',
        borderColor: 'buttonSecondaryDisabledBorder',
        color: 'buttonSecondaryDisabledLabel',
      },
    }),
    loading: responsiveHandler({
      base: {
        backgroundColor: 'buttonSecondaryLoadingBackground',
        borderColor: 'buttonSecondaryLoadingBackground',
      },
    }),
    error: responsiveHandler({
      base: {
        backgroundColor: 'buttonSecondaryErrorBackground',
        borderColor: 'buttonSecondaryErrorBackground',
        color: 'buttonSecondaryErrorLabel',
      },
    }),
  }),
  tertiary: StyleSheet.create({
    default: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryDefaultBackground',
        borderColor: 'buttonPrimaryDefaultBackground',
        color: 'buttonPrimaryDefaultLabel',
      },
    }),
    hover: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryHoverBackground',
        borderColor: 'buttonPrimaryHoverBackground',
        color: 'buttonPrimaryHoverLabel',
      },
    }),
    focused: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryFocusedBackground',
        borderColor: 'buttonPrimaryFocusedBorder',
        color: 'buttonPrimaryFocusedLabel',
      },
    }),
    pressed: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryPressedBackground',
        borderColor: 'buttonPrimaryPressedBorder',
        color: 'buttonPrimaryPressedLabel',
      },
    }),
    disabled: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryDisabledBackground',
        borderColor: 'buttonPrimaryDisabledBorder',
        color: 'buttonPrimaryDisabledLabel',
      },
    }),
    loading: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryLoadingBackground',
        borderColor: 'buttonPrimaryLoadingBackground',
      },
    }),
    error: responsiveHandler({
      base: {
        backgroundColor: 'buttonPrimaryErrorBackground',
        borderColor: 'buttonPrimaryErrorBackground',
        color: 'buttonPrimaryErrorLabel',
      },
    }),
  }),
};
