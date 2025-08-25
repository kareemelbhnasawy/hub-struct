import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  labelContainer: {
    base: {
      flexDirection: 'row',
      columnGap: 4,
      alignItems: 'center',
    },
  },
  inputContainer: {
    base: {
      borderRadius: 12,
      borderWidth: 1,
      paddingHorizontal: 16,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 8,
    },
  },
  default: {
    base: {
      borderColor: 'borderNeutralSecondary',
    },
  },
  hover: {
    base: {
      borderColor: 'borderNeutralSecondary',
      backgroundColor: 'backgroundNeutral50',
    },
  },
  pressed: {
    base: {
      borderColor: 'borderNeutralSecondary',
      backgroundColor: 'borderNeutralSecondary',
    },
  },
  focused: {
    base: {
      borderColor: 'borderPrimary',
    },
  },
  disabled: {
    base: {
      borderColor: 'borderNeutralSecondary',
      backgroundColor: 'backgroundNeutral50',
    },
  },
  error: {
    base: {
      borderColor: 'borderError',
    },
  },
  alignItemsCenter: {
    base: {
      alignItems: 'center',
    },
  },
  errorColor: {
    base: {
      color: 'textError',
    },
  },
  textDefault: {
    base: {
      color: 'textDefault',
    },
  }
});

export default styles;
