import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  // Container styles
  badgeContainer: {
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderWidth: 1, // Add border width
    },
  },

  // Container variant styles
  containerNumber: {
    base: {
      borderRadius: 12, // Same radius for all number sizes
      minWidth: 20,
      minHeight: 20,
    },
  },

  // Variant text styles
  textNumber: {
    base: {
      textAlign: 'center',
    },
  },

  // Container size styles for labels (numbers use same border radius)
  sm: {
    base: {
      borderRadius: 4,
      paddingHorizontal: 6,
      paddingVertical: 2,
    },
  },
  md: {
    base: {
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
  },
  lg: {
    base: {
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 6,
    },
  },

  // Background color styles using theme colors
  brand: {
    base: {
      backgroundColor: 'badgeDefaultBackground',
      borderColor: 'textPrimary', // Add matching border color
      color: 'textPrimary',
    },
  },
  success: {
    base: {
      backgroundColor: 'badgeSuccessBackground',
      borderColor: 'badgeSuccessText', // Add matching border color
      color: 'badgeSuccessText',
    },
  },
  warning: {
    base: {
      backgroundColor: 'badgeWarningBackground',
      borderColor: 'badgeWarningText', // Add matching border color
      color: 'badgeWarningText',
    },
  },
  error: {
    base: {
      backgroundColor: 'badgeErrorBackground',
      borderColor: 'badgeErrorText', // Add matching border color
      color: 'badgeErrorText',
    },
  },
  gray: {
    base: {
      backgroundColor: 'badgeDefaultBackground',
      borderColor: 'badgeDefaultText', // Add matching border color
      color: 'badgeDefaultText',
    },
  },
});

export default styles;
