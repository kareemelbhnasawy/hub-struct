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
  primary: {
    default: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonPrimaryDefaultBackground',
          borderColor: 'buttonPrimaryDefaultBackground',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonPrimaryDefaultLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonPrimaryDefaultIcon',
        },
      }),
    }),
    hover: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonPrimaryHoverBackground',
          borderColor: 'buttonPrimaryHoverBackground',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonPrimaryHoverLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonPrimaryHoverIcon',
        },
      }),
    }),
    focused: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonPrimaryFocusedBackground',
          borderColor: 'buttonPrimaryFocusedBorder',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonPrimaryFocusedLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonPrimaryFocusedIcon',
        },
      }),
    }),
    pressed: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonPrimaryPressedBackground',
          borderColor: 'buttonPrimaryPressedBorder',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonPrimaryPressedLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonPrimaryPressedIcon',
        },
      }),
    }),
    disabled: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonPrimaryDisabledBackground',
          borderColor: 'buttonPrimaryDisabledBorder',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonPrimaryDisabledLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonPrimaryDisabledIcon',
        },
      }),
    }),
    loading: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonPrimaryLoadingBackground',
          borderColor: 'buttonPrimaryLoadingBackground',
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
          backgroundColor: 'buttonPrimaryErrorBackground',
          borderColor: 'buttonPrimaryErrorBackground',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonPrimaryErrorLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonPrimaryErrorIcon',
        },
      }),
    }),
  },
  secondary: {
    default: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonSecondaryDefaultBackground',
          borderColor: 'buttonSecondaryDefaultBackground',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonSecondaryDefaultLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonSecondaryDefaultIcon',
        },
      }),
    }),
    hover: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonSecondaryHoverBackground',
          borderColor: 'buttonSecondaryHoverBackground',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonSecondaryHoverLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonSecondaryHoverIcon',
        },
      }),
    }),
    focused: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonSecondaryFocusedBackground',
          borderColor: 'buttonSecondaryFocusedBorder',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonSecondaryFocusedLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonSecondaryFocusedIcon',
        },
      }),
    }),
    pressed: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonSecondaryPressedBackground',
          borderColor: 'buttonSecondaryPressedBorder',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonSecondaryPressedLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonSecondaryPressedIcon',
        },
      }),
    }),
    disabled: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonSecondaryDisabledBackground',
          borderColor: 'buttonSecondaryDisabledBorder',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonSecondaryDisabledLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonSecondaryDisabledIcon',
        },
      }),
    }),
    loading: StyleSheet.create({
      wrapper: responsiveHandler({
        base: {
          backgroundColor: 'buttonSecondaryLoadingBackground',
          borderColor: 'buttonSecondaryLoadingBackground',
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
          backgroundColor: 'buttonSecondaryErrorBackground',
          borderColor: 'buttonSecondaryErrorBackground',
        },
      }),
      text: responsiveHandler({
        base: {
          color: 'buttonSecondaryErrorLabel',
        },
      }),
      icon: responsiveHandler({
        base: {
          color: 'buttonSecondaryErrorIcon',
        },
      }),
    }),
  },
  // tertiary: {
  //   default: StyleSheet.create({
  //     wrapper: responsiveHandler({
  //       base: {
  //         backgroundColor: 'buttonTertiaryDefaultBackground',
  //         borderColor: 'buttonTertiaryDefaultBackground',
  //       },
  //     }),
  //     text: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryDefaultLabel',
  //       },
  //     }),
  //     icon: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryDefaultIcon',
  //       },
  //     }),
  //   }),
  //   hover: StyleSheet.create({
  //     wrapper: responsiveHandler({
  //       base: {
  //         backgroundColor: 'buttonTertiaryHoverBackground',
  //         borderColor: 'buttonTertiaryHoverBackground',
  //       },
  //     }),
  //     text: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryHoverLabel',
  //       },
  //     }),
  //     icon: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryHoverIcon',
  //       },
  //     }),
  //   }),
  //   focused: StyleSheet.create({
  //     wrapper: responsiveHandler({
  //       base: {
  //         backgroundColor: 'buttonTertiaryFocusedBackground',
  //         borderColor: 'buttonTertiaryFocusedBorder',
  //       },
  //     }),
  //     text: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryFocusedLabel',
  //       },
  //     }),
  //     icon: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryFocusedIcon',
  //       },
  //     }),
  //   }),
  //   pressed: StyleSheet.create({
  //     wrapper: responsiveHandler({
  //       base: {
  //         backgroundColor: 'buttonTertiaryPressedBackground',
  //         borderColor: 'buttonTertiaryPressedBorder',
  //       },
  //     }),
  //     text: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryPressedLabel',
  //       },
  //     }),
  //     icon: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryPressedIcon',
  //       },
  //     }),
  //   }),
  //   disabled: StyleSheet.create({
  //     wrapper: responsiveHandler({
  //       base: {
  //         backgroundColor: 'buttonTertiaryDisabledBackground',
  //         borderColor: 'buttonTertiaryDisabledBorder',
  //       },
  //     }),
  //     text: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryDisabledLabel',
  //       },
  //     }),
  //     icon: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryDisabledIcon',
  //       },
  //     }),
  //   }),
  //   loading: StyleSheet.create({
  //     wrapper: responsiveHandler({
  //       base: {
  //         backgroundColor: 'buttonTertiaryLoadingBackground',
  //         borderColor: 'buttonTertiaryLoadingBackground',
  //       },
  //     }),
  //     text: responsiveHandler({
  //       base: {
  //         // EMPTY ON PURPOSE
  //       },
  //     }),
  //     icon: responsiveHandler({
  //       base: {
  //         // EMPTY ON PURPOSE
  //       },
  //     }),
  //   }),
  //   error: StyleSheet.create({
  //     wrapper: responsiveHandler({
  //       base: {
  //         backgroundColor: 'buttonTertiaryErrorBackground',
  //         borderColor: 'buttonTertiaryErrorBackground',
  //       },
  //     }),
  //     text: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryErrorLabel',
  //       },
  //     }),
  //     icon: responsiveHandler({
  //       base: {
  //         color: 'buttonTertiaryErrorIcon',
  //       },
  //     }),
  //   }),
  // },
};
