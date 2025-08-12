import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';

export const styles = {
  base: StyleSheet.create({
    button: responsiveHandler({
      base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 44,
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
  link: {
    default: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'backgroundWhite',
          borderColor: 'backgroundWhite',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'linkPrimaryDefaultLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'linkPrimaryDefaultIcon',
        },
      }),
    }),
    hover: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'backgroundWhite',
          borderColor: 'backgroundWhite',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'linkPrimaryHoverLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'linkPrimaryHoverIcon',
        },
      }),
    }),
    focused: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'backgroundWhite',
          borderColor: 'linkPrimaryFocusedBorder',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'linkPrimaryFocusedLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'linkPrimaryFocusedIcon',
        },
      }),
    }),
    pressed: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'backgroundWhite',
          borderColor: 'backgroundWhite',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'linkPrimaryPressedLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'linkPrimaryPressedIcon',
        },
      }),
    }),
    disabled: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'backgroundWhite',
          borderColor: 'backgroundWhite',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'linkPrimaryDisabledLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'linkPrimaryDisabledIcon',
        },
      }),
    }),
    loading: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'backgroundWhite',
          borderColor: 'backgroundWhite',
        },
      }),
      text: responsiveHandler({
        base: {
          // EMPTY ON PURPOSE
        },
      }),
      icon: responsiveHandler({
        base: {
          // EMPTY ON PURPOSE
        },
      }),
    }),
    error: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'backgroundWhite',
          borderColor: 'backgroundWhite',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'textError',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'textError',
        },
      }),
    }),
  },
  outline: responsiveHandler({
    base: {
      borderColor: 'linkPrimaryFocusedBorder',
      borderWidth: 2,
      borderRadius: 8,
      paddingVertical: 2,
      paddingHorizontal: 2,
    },
  }),
};
