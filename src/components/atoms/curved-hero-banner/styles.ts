import { verticalScale } from '@/store/theme/utils';
import { createThemedStyles } from '@/utilities';
import { StyleSheet } from 'react-native';

const styles = (imageWidth: number, imageHeight: number) =>
  createThemedStyles({
    container: {
      base: {
        width: imageWidth,
        height: imageHeight + verticalScale(15),
      },
      options: { skipScale: true },
    },
    maskView: {
      base: {
        width: imageWidth,
        ...StyleSheet.absoluteFillObject,
      },
      options: { skipScale: true },
    },
    image: {
      base: {
        width: imageWidth,
        height: imageHeight,
        // ...StyleSheet.absoluteFillObject,
      },
      options: { skipScale: true },
    },
    iconWrapper: {
      base: {
        position: 'absolute',
        start: 16,
        top: 60,
        zIndex: 1,
      },
    },
  });

export default styles;
