import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  // Container styles
  badgeContainer: {
    base: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderWidth: 1, // Add border width
      columnGap: 5
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
      backgroundColor: 'badgeBrandTealBackground',
      borderColor: 'badgeBrandTealForeground', // Add matching border color
      color: 'badgeBrandTealForeground',
    },
  },
  success: {
    base: {
      backgroundColor: 'badgeBrandGreenBackground',
      borderColor: 'badgeBrandGreenForeground', // Add matching border color
      color: 'badgeBrandGreenForeground',
    },
  },
  warning: {
    base: {
      backgroundColor: 'badgeBrandYellowBackground',
      borderColor: 'badgeBrandYellowForeground', // Add matching border color
      color: 'badgeBrandYellowForeground',
    },
  },
  error: {
    base: {
      backgroundColor: 'badgeBrandOrangeBackground',
      borderColor: 'badgeBrandOrangeForeground', // Add matching border color
      color: 'badgeBrandOrangeForeground',
    },
  },
  gray: {
    base: {
      backgroundColor: 'badgeDefaultBackground',
      borderColor: 'badgeDefaultText', // Add matching border color
      color: 'badgeDefaultText',
    },
  },
  'warning-outline': {
    base: {
      backgroundColor: 'backgroundWhite',
      borderColor: 'badgeBorderWarning',
      color: 'badgeTextWarning',
    },
  }
});

export default styles;
