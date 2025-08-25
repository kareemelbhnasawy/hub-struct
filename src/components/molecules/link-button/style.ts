import { createThemedStyles } from '@/utilities';

export const linkStyles = createThemedStyles({
  defaultText: {
    base: {
      color: 'linkPrimaryDefaultLabel',
      textDecorationLine: 'underline',
    },
  },
  hoverText: {
    base: {
      color: 'linkPrimaryHoverLabel',
    },
  },
  focusedText: {
    base: {
      color: 'linkPrimaryFocusedLabel',
    },
  },
  pressedText: {
    base: {
      color: 'linkPrimaryPressedLabel',
    },
  },
  disabledText: {
    base: {
      color: 'linkPrimaryDisabledLabel',
    },
  },
  border: {
    base: {
      alignSelf:'flex-start',
      padding: 1,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'linkPrimaryFocusedBorder',
    },
  },
});
