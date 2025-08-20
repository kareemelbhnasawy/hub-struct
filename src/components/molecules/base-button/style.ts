import createThemedStyles from '@/utilities/create-themed-styles';

export const styles = {
  base: createThemedStyles({
    button: {
      base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        minHeight: 44,
      },
    },
    xxl: {
      base: {
        paddingVertical: 48,
        paddingHorizontal: 64,
        gap: 16,
        borderRadius: 28,
      },
    },
    xl: {
      base: {
        paddingVertical: 32,
        paddingHorizontal: 48,
        gap: 12,
        borderRadius: 28,
      },
    },
    lg: {
      base: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        gap: 8,
        borderRadius: 16,
      },
    },
    md: {
      base: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        gap: 8,
        borderRadius: 10,
      },
    },
    sm: {
      base: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        gap: 4,
        borderRadius: 8,
      },
    },
  }),
  primary: {
    default: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonPrimaryDefaultBackground',
          borderColor: 'buttonPrimaryDefaultBackground',
        },
      },
      text: {
        base: {
          color: 'buttonPrimaryDefaultLabel',
        },
      },
      icon: {
        base: {
          color: 'buttonPrimaryDefaultIcon',
        },
      },
    }),
    hover: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonPrimaryHoverBackground',
          borderColor: 'buttonPrimaryHoverBackground',
        },
      },
      text: {
        base: {
          color: 'buttonPrimaryHoverLabel',
        },
      },
      icon: {
        base: {
          color: 'buttonPrimaryHoverIcon',
        },
      },
    }),
    focused: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonPrimaryFocusedBackground',
          borderColor: 'buttonPrimaryFocusedBorder',
        },
      },
      text: {
        base: {
          color: 'buttonPrimaryFocusedLabel',
        },
      },
      icon: {
        base: {
          color: 'buttonPrimaryFocusedIcon',
        },
      },
    }),
    pressed: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonPrimaryPressedBackground',
          borderColor: 'buttonPrimaryPressedBorder',
        },
      },
      text: {
        base: {
          color: 'buttonPrimaryPressedLabel',
        },
      },
      icon: {
        base: {
          color: 'buttonPrimaryPressedIcon',
        },
      },
    }),
    disabled: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonPrimaryDisabledBackground',
          //TODO: CHECK WHERE THIS COLOR IS?
          // borderColor: 'buttonPrimaryDisabledBorder',
        },
      },
      text: {
        base: {
          color: 'buttonPrimaryDisabledLabel',
        },
      },
      icon: {
        base: {
          color: 'buttonPrimaryDisabledIcon',
        },
      },
    }),
    loading: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonPrimaryLoadingBackground',
          borderColor: 'buttonPrimaryLoadingBackground',
        },
      },
      text: {
        base: {
          // EMPTY ON PURPOSE
        },
      },
      icon: {
        base: {
          // EMPTY ON PURPOSE
        },
      },
    }),
    error: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonPrimaryErrorBackground',
          borderColor: 'buttonPrimaryErrorBackground',
        },
      },
      text: {
        base: {
          color: 'buttonPrimaryErrorLabel',
        },
      },
      icon: {
        base: {
          color: 'buttonPrimaryErrorIcon',
        },
      },
    }),
  },
  secondary: {
    default: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonSecondaryDefaultBackground',
          borderColor: 'buttonSecondaryDefaultBackground',
        },
      },
      text: {
        base: {
          color: 'buttonSecondaryDefaultLabel',
        },
      },
      icon: {
        base: {
          color: 'buttonSecondaryDefaultIcon',
        },
      },
    }),
    hover: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonSecondaryHoverBackground',
          borderColor: 'buttonSecondaryHoverBackground',
        },
      },
      text: {
        base: {
          color: 'buttonSecondaryHoverLabel',
        },
      },
      icon: {
        base: {
          color: 'buttonSecondaryHoverIcon',
        },
      },
    }),
    focused: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonSecondaryFocusedBackground',
          borderColor: 'buttonSecondaryFocusedBorder',
        },
      },
      text: {
        base: {
          color: 'buttonSecondaryHoverIcon',
        },
      },
    }),
    pressed: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonSecondaryPressedBackground',
          borderColor: 'buttonSecondaryPressedBorder',
        },
      },
      text: {
        base: {
          color: 'buttonSecondaryPressedLabel',
        },
      },
      icon: {
        base: {
          color: 'buttonSecondaryFocusedIcon',
        },
      },
    }),
    disabled: createThemedStyles({
      wrapper: {
        base: {
          //TODO: CHECK WHERE THIS COLOR IS?
          // backgroundColor: 'buttonSecondaryDisabledBackground',
          borderColor: 'buttonSecondaryDisabledBorder',
        },
      },
      text: {
        base: {
          color: 'buttonSecondaryDisabledLabel',
        },
      },
      icon: {
        base: {
          color: 'buttonSecondaryDisabledIcon',
        },
      },
    }),
    loading: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonSecondaryLoadingBackground',
          borderColor: 'buttonSecondaryLoadingBackground',
        },
      },
      text: {
        base: {
          // EMPTY ON PURPOSE
        },
      },
      icon: {
        base: {
          // EMPTY ON PURPOSE
        },
      },
    }),
    error: createThemedStyles({
      wrapper: {
        base: {
          backgroundColor: 'buttonSecondaryErrorBackground',
          borderColor: 'buttonSecondaryErrorBackground',
        },
      },
      text: {
        base: {
          color: 'buttonSecondaryErrorLabel',
        },
      },
      icon: {
        base: {
          color: 'buttonSecondaryErrorIcon',
        },
      },
    }),
  },
  // tertiary: {
  //   default: createThemedStyles({
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
  //   hover: createThemedStyles({
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
  //   focused: createThemedStyles({
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
