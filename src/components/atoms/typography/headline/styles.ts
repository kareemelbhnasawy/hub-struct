import { fontWeights } from '@/theme/theme-fonts';
import { createThemedStyles } from '@/utilities';
import { getFont } from '@/utilities';

const styles = createThemedStyles({
  headline: {
    base: {
      color: 'textPrimary',
      textAlign: 'left',
    },
  },
  Thin: {
    base: {
      fontFamily: getFont(fontWeights.Thin),
    },
  },
  Light: {
    base: {
      fontFamily: getFont(fontWeights.Light),
    },
  },
  Regular: {
    base: {
      fontFamily: getFont(fontWeights.Regular),
    },
  },
  Medium: {
    base: {
      fontFamily: getFont(fontWeights.Medium),
    },
  },
  Semibold: {
    base: {
      fontFamily: getFont(fontWeights.Semibold),
    },
  },
  Bold: {
    base: {
      fontFamily: getFont(fontWeights.Bold),
    },
  },
  Title: {
    base: {
      fontFamily: getFont(fontWeights.Title),
    },
  },
  '2xl': {
    base: {
      fontSize: 48,
      lineHeight: 52,
    },
    tablet: {
      fontSize: 36,
      lineHeight: 72,
    },
    mobile: {
      fontSize: 32,
      lineHeight: 64,
    },
  },
  xl: {
    base: {
      fontSize: 36,
      lineHeight: 40,
    },
    tablet: {
      fontSize: 30,
      lineHeight: 64,
    },
    mobile: {
      fontSize: 24,
      lineHeight: 52,
    },
  },
  lg: {
    base: {
      fontSize: 32,
      lineHeight: 36,
    },
    tablet: {
      fontSize: 32,
      lineHeight: 48,
    },
    mobile: {
      fontSize: 32,
      lineHeight: 40,
    },
  },
  md: {
    base: {
      fontSize: 28,
      lineHeight: 32,
    },
    tablet: {
      fontSize: 24,
      lineHeight: 40,
    },
    mobile: {
      fontSize: 20,
      lineHeight: 32,
    },
  },
  sm: {
    base: {
      fontSize: 24,
      lineHeight: 24,
    },
    tablet: {
      fontSize: 20,
      lineHeight: 28,
    },
    mobile: {
      fontSize: 18,
      lineHeight: 24,
    },
  },
  xs: {
    base: {
      fontSize: 20,
      lineHeight: 24,
    },
    tablet: {
      fontSize: 20,
      lineHeight: 28,
    },
    mobile: {
      fontSize: 18,
      lineHeight: 24,
    },
  },
  '2xs': {
    base: {
      fontSize: 18,
      lineHeight: 22,
    },
    tablet: {
      fontSize: 20,
      lineHeight: 28,
    },
    mobile: {
      fontSize: 18,
      lineHeight: 24,
    },
  },
});

export default styles;
