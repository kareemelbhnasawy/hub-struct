import { createThemedStyles } from '@/utilities';
import { StyleSheet } from 'react-native';
import { Radius, SHADOWS } from '@/style';

export const styles = createThemedStyles({
  cardContainer: {
    base: {
      borderRadius: Radius.LG,
      backgroundColor: 'backgroundWhite',
      flex: 1,
      // Cross-platform shadow/elevation,

      ...SHADOWS.md,
    },
  },
  wrapper: {
    base: {
      flex: 1,
      borderRadius: Radius.XL,
      overflow: 'hidden',
    },
  },
  absoluteFill: {
    base: {
      ...StyleSheet.absoluteFill,
      top: '50%',
      alignSelf: 'center',
    },
  },
  contentWrapper: {
    base: {
      paddingHorizontal: 24,
      flex: 1,
      justifyContent: 'flex-end',
    },
  },
  logo: {
    base: {
      height: 80,
      width: 100,
    },
  },
  iconAnimationText: {
    base: {
      color: 'textSecondaryParagraph',
    },
  },
});
