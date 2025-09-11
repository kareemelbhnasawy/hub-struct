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
      borderRadius: Radius.LG,
      overflow: 'hidden',
    },
  },
  absoluteFill: {
    base: {
      ...StyleSheet.absoluteFill,
      height: '70%',
      top: '50%',
      alignSelf: 'center',
      overflow: 'visible',
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
