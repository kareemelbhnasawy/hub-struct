import { createThemedStyles } from '@/utilities';
import { Radius, SHADOWS } from '@/style';

export const styles = createThemedStyles({
  cardViewContainer: {
    base: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'borderSecondary',
      borderRadius: Radius.LG,
      ...SHADOWS.sm,
    },
  },
  cardContainer: {
    base: {
      borderRadius: Radius.LG,
      // backgroundColor: 'backgroundWhite',
      flex: 1,
      overflow: 'hidden',

      // Cross-platform shadow/elevation,
    },
  },
  imageBackground: {
    base: {
      position: 'absolute',
      top: '50%',
      left: -2,
      flex: 1,
      height: '52%',
      width: '102%',
      borderRadius: Radius.LG,
    },
  },
  wrapper: {
    base: {
      flex: 1,
      borderRadius: Radius.LG,
      overflow: 'hidden',
    },
  },
  digitalCardCut: {
    base: {
      // ...StyleSheet.absoluteFill,
      height: '50%',
      width: 200,
      top: '65%',
      // alignSelf: 'center',
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
      flex: 1,
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
  row: { base: { flexDirection: 'row', alignItems: 'center' } },
  identityAnimation: {
    base: {
      width: 50,
      height: 50,
    },
  },
});
