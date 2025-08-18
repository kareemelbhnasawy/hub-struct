import { Radius, SHADOWS } from '@/style';
import { createThemedStyles } from '@/utilities';

const styles = (borderRadius: Radius) =>
  createThemedStyles({
    container: {
      base: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: borderRadius,
        overflow: 'hidden',
        backgroundColor: 'alphaBlack10',
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.md,
      },
    },
    absoluteFill: {
      base: {
        bottom: 0,
        start: 0,
        position: 'absolute',
        end: 0,
        top: 0,
      },
    },
    borderMask: {
      base: {
        flex: 1,
        borderRadius: borderRadius,
        borderWidth: 2,
        borderColor: 'borderBlack',
      },
    },
    shimmerGradient: {
      base: { width: 400, height: '100%' },
    },
    innerBox: {
      base: { justifyContent: 'center', alignItems: 'center' },
    },
  });

export default styles;
