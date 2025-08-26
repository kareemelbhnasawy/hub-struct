import { createThemedStyles } from '@/utilities';

export const styles = createThemedStyles({
  pin: {
    base: {
      aspectRatio: 1,
      borderWidth: 1,
      borderRadius: 8,
      textAlign: 'center',
      width: 40,
      borderColor: 'borderNeutralPrimary',
      lineHeight: 'auto',
    },
  },
  pinFocused: {
    base: {
      borderColor: 'borderPrimary',
    },
  },
  pinError: {
    base: {
      borderColor: 'borderError',
    },
  },
  textError: {
    base: {
      color: 'textError',
    },
  },
  pinContainer: {
    base: {
      flex: 1,
      justifyContent: 'space-between',
    },
  },
});
