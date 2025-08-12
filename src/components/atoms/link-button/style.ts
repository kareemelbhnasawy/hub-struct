import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';

export const styles = {
  base: StyleSheet.create({
    button: responsiveHandler({
      base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderWidth: 0,
      },
    }),
    xxl: responsiveHandler({
      base: {
        paddingVertical: 4,
        paddingHorizontal: 4,
        gap: 8,
      },
    }),
    xl: responsiveHandler({
      base: {
        paddingVertical: 4,
        paddingHorizontal: 4,
        gap: 8,
      },
    }),
    lg: responsiveHandler({
      base: {
        paddingVertical: 4,
        paddingHorizontal: 4,
        gap: 6,
      },
    }),
    md: responsiveHandler({
      base: {
        paddingVertical: 4,
        paddingHorizontal: 4,
        gap: 6,
      },
    }),
    sm: responsiveHandler({
      base: {
        paddingVertical: 4,
        paddingHorizontal: 4,
        gap: 4,
      },
    }),
  }),
  link: StyleSheet.create({
    default: responsiveHandler({
      base: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'buttonLinkDefaultLabel',
      },
    }),
    hover: responsiveHandler({
      base: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'buttonLinkHoverLabel',
      },
    }),
    focused: responsiveHandler({
      base: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'buttonLinkFocusedLabel',
      },
    }),
    pressed: responsiveHandler({
      base: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'buttonLinkPressedLabel',
      },
    }),
    disabled: responsiveHandler({
      base: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'buttonLinkDisabledLabel',
      },
    }),
    loading: responsiveHandler({
      base: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
    }),
    error: responsiveHandler({
      base: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'buttonLinkDefaultLabel',
      },
    }),
  }),
};
