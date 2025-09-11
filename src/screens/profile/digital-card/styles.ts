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
  iconAnimationText: {
    base: {
      color: 'textSecondaryParagraph',
    },
  },
  backdrop: {
    base: {
      flex: 1,
      backgroundColor: 'alphaBlack40',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  qrCodeContainer: {
    base: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: 'backgroundWhite',
      borderRadius: Radius.MD,
    },
  },
  qrCodeInnerContainer: {
    base: {
      borderWidth: 1,
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderColor: 'foregroundSenary',
      borderRadius: Radius.MD,
    },
  },
});
