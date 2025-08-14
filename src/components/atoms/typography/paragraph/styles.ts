import { fontWeights } from '@/theme/theme-fonts';
import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  paragraph: {
    base: {
      color: 'textPrimary',
    },
  },
  Thin: {
    base: {
      fontWeight: fontWeights.Thin,
    },
  },
  Light: {
    base: {
      fontWeight: fontWeights.Light,
    },
  },
  Regular: {
    base: {
      fontWeight: fontWeights.Regular,
    },
  },
  Medium: {
    base: {
      fontWeight: fontWeights.Medium,
    },
  },
  Semibold: {
    base: {
      fontWeight: fontWeights.Semibold,
    },
  },
  Bold: {
    base: {
      fontWeight: fontWeights.Bold,
    },
  },
  Title: {
    base: {
      fontWeight: fontWeights.Title,
    },
  },
  xl: {
    base: {
      fontSize: 16,
      lineHeight: 20,
    },
    tablet: {
      fontSize: 18,
      lineHeight: 26,
    },
    mobile: {
      fontSize: 16,
      lineHeight: 24,
    },
  },
  lg: {
    base: {
      fontSize: 14,
      lineHeight: 18,
    },
    tablet: {
      fontSize: 16,
      lineHeight: 24,
    },
    mobile: {
      fontSize: 14,
      lineHeight: 20,
    },
  },
  md: {
    base: {
      fontSize: 12,
      lineHeight: 16,
    },
    tablet: {
      fontSize: 14,
      lineHeight: 20,
    },
    mobile: {
      fontSize: 12,
      lineHeight: 18,
    },
  },
  sm: {
    base: {
      fontSize: 11,
      lineHeight: 15,
    },
    tablet: {
      fontSize: 12,
      lineHeight: 16,
    },
    mobile: {
      fontSize: 11,
      lineHeight: 14,
    },
  },
});

export default styles;
