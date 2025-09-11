import { Radius } from '@/style';
import createThemedStyles from '@/utilities/create-themed-styles';

const styles = createThemedStyles({
  button: {
    base: {
      width: '100%',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: Radius.FULL,
      alignItems: 'center',
    },
  },
  primary: {
    base: {
      backgroundColor: 'backgroundBrandPrimary',
      color: 'textOnColorPrimary',
    },
  },
  secondary: {
    base: {
      backgroundColor: 'alphaBlack10',
      color: 'textPrimary',
    },
  },
  destructive: {
    base: {
      backgroundColor: 'alphaBlack10',
      color: 'textError',
    },
  },
  bgTrans: {
    base: {
      backgroundColor: 'transparent',
    },
  },
});

export default styles;
