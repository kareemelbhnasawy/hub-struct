import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';

export const styles = {
  base: StyleSheet.create({
    button: responsiveHandler({
      base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'surfaceOncolor',
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
        backgroundColor: 'surfaceOncolor',
        borderColor: 'surfaceOncolor',
        color: 'textPrimary',
      },
    }),
    hover: responsiveHandler({
      base: {
        backgroundColor: 'surfaceOncolor',
        borderColor: 'surfaceOncolor',
        color: 'textTitle',
      },
    }),
    focused: responsiveHandler({
      base: {
        backgroundColor: 'surfaceOncolor',
        borderColor: 'surfaceOncolor',
        color: 'textTitle',
      },
    }),
    pressed: responsiveHandler({
      base: {
        backgroundColor: 'surfaceOncolor',
        borderColor: 'surfaceOncolor',
        color: 'textSecondary',
      },
    }),
    disabled: responsiveHandler({
      base: {
        backgroundColor: 'surfaceOncolor',
        borderColor: 'surfaceOncolor',
        color: 'textDefault',
      },
    }),
    loading: responsiveHandler({
      base: {
        backgroundColor: 'surfaceOncolor',
        borderColor: 'surfaceOncolor',
      },
    }),
    error: responsiveHandler({
      base: {
        backgroundColor: 'surfaceOncolor',
        borderColor: 'surfaceOncolor',
        color: 'backgroundError',
      },
    }),
  }),
};
