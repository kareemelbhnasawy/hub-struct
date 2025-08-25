import createThemedStyles from '@/utilities/create-themed-styles';

const baseStyles = createThemedStyles({
  button: {
    base: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
    },
  },
  xxl: {
    base: {
      height: 38,
      minWidth: 135,
      borderRadius: 14,
      paddingHorizontal: 28,
      gap: 10,
    },
  },
  xl: {
    base: {
      height: 34,
      minWidth: 128,
      borderRadius: 12,
      paddingHorizontal: 24,
      gap: 10,
    },
  },
  lg: {
    base: {
      height: 56,
      minWidth: 90,
      borderRadius: 10,
      paddingHorizontal: 24,
      paddingVertical: 16,
      gap: 6,
    },
  },
  md: {
    base: {
      height: 26,
      minWidth: 82,
      borderRadius: 10,
      paddingHorizontal: 16,
      gap: 5,
    },
  },
  sm: {
    base: {
      height: 32,
      minWidth: 72,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
      gap: 5,
    },
  },
});

const primaryStyles = createThemedStyles({
  default: {
    base: {
      backgroundColor: 'buttonPrimaryDefaultBackground',
      borderColor: 'buttonPrimaryDefaultBackground',
      color: 'buttonPrimaryDefaultLabel',
    },
  },
  defaultIcon: {
    base: {
      color: 'buttonPrimaryDefaultIcon',
    },
  },
  hover: {
    base: {
      backgroundColor: 'buttonPrimaryHoverBackground',
      borderColor: 'buttonPrimaryHoverBackground',
      color: 'buttonPrimaryHoverLabel',
    },
  },
  hoverIcon: {
    base: {
      color: 'buttonPrimaryHoverIcon',
    },
  },
  focused: {
    base: {
      backgroundColor: 'buttonPrimaryFocusedBackground',
      borderColor: 'buttonPrimaryFocusedBorder',
      color: 'buttonPrimaryFocusedLabel',
    },
  },
  focusedIcon: {
    base: {
      color: 'buttonPrimaryFocusedIcon',
    },
  },
  pressed: {
    base: {
      backgroundColor: 'buttonPrimaryPressedBackground',
      borderColor: 'buttonPrimaryPressedBorder',
      color: 'buttonPrimaryPressedLabel',
    },
  },
  pressedIcon: {
    base: {
      color: 'buttonPrimaryPressedIcon',
    },
  },
  disabled: {
    base: {
      backgroundColor: 'buttonPrimaryDisabledBackground',
      color: 'buttonPrimaryDisabledLabel',
    },
  },
  disabledIcon: {
    base: {
      color: 'buttonPrimaryDisabledIcon',
    },
  },
  loading: {
    base: {
      backgroundColor: 'buttonPrimaryLoadingBackground',
      color: 'buttonPrimaryLoadingLabel',
    },
  },
  loadingIcon: {
    base: {
      color: 'buttonPrimaryLoadingIcon',
    },
  },
  success: {
    base: {
      backgroundColor: 'buttonPrimarySuccessBackground',
      color: 'buttonPrimarySuccessLabel',
    },
  },
  successIcon: {
    base: {
      color: 'buttonPrimarySuccessIcon',
    },
  },
  border: {
    base: {
      borderWidth: 0,
    },
  },
});

const primaryDangerStyles = createThemedStyles({
  default: {
    base: {
      backgroundColor: 'buttonPrimaryDangerDefaultBackground',
      color: 'buttonPrimaryDangerDefaultLabel',
    },
  },
  defaultIcon: {
    base: {
      color: 'buttonPrimaryDangerDefaultIcon',
    },
  },
  hover: {
    base: {
      backgroundColor: 'buttonPrimaryDangerHoverBackground',
      color: 'buttonPrimaryDangerHoverLabel',
    },
  },
  hoverIcon: {
    base: {
      color: 'buttonPrimaryDangerHoverIcon',
    },
  },
  focused: {
    base: {
      backgroundColor: 'buttonPrimaryDangerFocusedBackground',
      color: 'buttonPrimaryDangerFocusedLabel',
    },
  },
  focusedIcon: {
    base: {
      color: 'buttonPrimaryDangerFocusedIcon',
    },
  },
  pressed: {
    base: {
      backgroundColor: 'buttonPrimaryDangerPressedBackground',
      color: 'buttonPrimaryDangerPressedLabel',
    },
  },
  pressedIcon: {
    base: {
      color: 'buttonPrimaryDangerPressedIcon',
    },
  },
  disabled: {
    base: {
      backgroundColor: 'buttonPrimaryDangerDisabledBackground',
      color: 'buttonPrimaryDangerDisabledLabel',
    },
  },
  disabledIcon: {
    base: {
      color: 'buttonPrimaryDangerDisabledIcon',
    },
  },
  loading: {
    base: {
      backgroundColor: 'buttonPrimaryDangerLoadingBackground',
      color: 'buttonPrimaryDangerLoadingLabel',
    },
  },
  loadingIcon: {
    base: {
      color: 'buttonPrimaryDangerLoadingIcon',
    },
  },
  success: {
    base: {
      backgroundColor: 'buttonPrimaryDangerSuccessBackground',
      color: 'buttonPrimaryDangerSuccessLabel',
    },
  },
  successIcon: {
    base: {
      color: 'buttonPrimaryDangerSuccessIcon',
    },
  },
  border: {
    base: {
      borderWidth: 0,
    },
  },
});

const secondaryStyles = createThemedStyles({
  default: {
    base: {
      backgroundColor: 'buttonSecondaryDefaultBackground',
      color: 'buttonSecondaryDefaultLabel',
    },
  },
  defaultIcon: {
    base: {
      color: 'buttonSecondaryDefaultIcon',
    },
  },
  hover: {
    base: {
      backgroundColor: 'buttonSecondaryHoverBackground',
      borderColor: 'buttonSecondaryHoverBackground',
      color: 'buttonSecondaryHoverLabel',
    },
  },
  hoverIcon: {
    base: {
      color: 'buttonSecondaryHoverIcon',
    },
  },
  focused: {
    base: {
      backgroundColor: 'buttonSecondaryFocusedBackground',
      borderColor: 'buttonSecondaryFocusedBorder',
      color: 'buttonSecondaryHoverIcon',
    },
  },
  focusedIcon: {
    base: {
      color: 'buttonPrimaryFocusedIcon',
    },
  },
  pressed: {
    base: {
      backgroundColor: 'buttonSecondaryPressedBackground',
      borderColor: 'buttonSecondaryPressedBorder',
      color: 'buttonSecondaryPressedLabel',
    },
  },
  pressedIcon: {
    base: {
      color: 'buttonSecondaryFocusedIcon',
    },
  },
  disabled: {
    base: {
      backgroundColor: 'buttonSecondaryDisabledBackground',
      color: 'buttonSecondaryDisabledLabel',
    },
  },
  disabledIcon: {
    base: {
      color: 'buttonSecondaryDisabledIcon',
    },
  },
  loading: {
    base: {
      backgroundColor: 'buttonSecondaryLoadingBackground',
      color: 'buttonSecondaryLoadingLabel',
    },
  },
  loadingIcon: {
    base: {
      color: 'buttonSecondaryLoadingIcon',
    },
  },
  success: {
    base: {
      backgroundColor: 'buttonPrimarySuccessBackground',
      color: 'buttonPrimarySuccessLabel',
    },
  },
  successIcon: {
    base: {
      color: 'buttonPrimarySuccessIcon',
    },
  },
  border: {
    base: {
      borderColor: 'buttonSecondaryDefaultBorder',
      borderWidth: 1,
    },
  },
});

const secondaryDangerStyles = createThemedStyles({
  default: {
    base: {
      backgroundColor: 'buttonSecondaryDangerDefaultBackground',
      color: 'buttonSecondaryDangerDefaultLabel',
    },
  },
  defaultIcon: {
    base: {
      color: 'buttonSecondaryDangerDefaultIcon',
    },
  },
  hover: {
    base: {
      backgroundColor: 'buttonSecondaryDangerHoverBackground',
      color: 'buttonSecondaryDangerHoverLabel',
    },
  },
  hoverIcon: {
    base: {
      color: 'buttonSecondaryDangerHoverIcon',
    },
  },
  focused: {
    base: {
      backgroundColor: 'buttonSecondaryDangerFocusedBackground',
      color: 'buttonSecondaryDangerFocusedIcon',
    },
  },
  focusedIcon: {
    base: {
      color: 'buttonPrimaryDangerFocusedIcon',
    },
  },
  pressed: {
    base: {
      backgroundColor: 'buttonSecondaryDangerPressedBackground',
      color: 'buttonSecondaryDangerPressedLabel',
    },
  },
  pressedIcon: {
    base: {
      color: 'buttonSecondaryDangerPressedIcon',
    },
  },
  disabled: {
    base: {
      backgroundColor: 'buttonSecondaryDangerDisabledBackground',
      color: 'buttonSecondaryDangerDisabledLabel',
    },
  },
  disabledIcon: {
    base: {
      color: 'buttonSecondaryDangerDisabledIcon',
    },
  },
  loading: {
    base: {
      backgroundColor: 'buttonSecondaryDangerLoadingBackground',
      color: 'buttonSecondaryDangerLoadingLabel',
    },
  },
  loadingIcon: {
    base: {
      color: 'buttonSecondaryDangerLoadingIcon',
    },
  },
  success: {
    base: {
      backgroundColor: 'buttonPrimaryDangerSuccessBackground',
      color: 'buttonPrimaryDangerSuccessLabel',
    },
  },
  successIcon: {
    base: {
      color: 'buttonPrimaryDangerSuccessIcon',
    },
  },
  border: {
    base: {
      borderColor: 'buttonSecondaryDangerDefaultBorder',
      borderWidth: 1,
    },
  },
});

export {
  baseStyles,
  primaryStyles,
  primaryDangerStyles,
  secondaryStyles,
  secondaryDangerStyles,
};
