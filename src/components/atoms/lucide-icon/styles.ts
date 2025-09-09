import { scale } from '@/store/theme/utils';
import { DEFAULT_ICON_SIZE } from './constants';
import { createThemedStyles } from '@/utilities';

const styles = (size: number = DEFAULT_ICON_SIZE) =>
  createThemedStyles({
    wrapperBase: {
      base: { width: scale(size) + size, height: scale(size) + size },
      options: { skipScale: true },
    },

    wrapper: {
      base: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9999,
      },
    },
    circleBackground: {
      base: {
        backgroundColor: 'iconBackgroundSelected',
      },
    },
    outline: {
      base: {
        borderColor: 'borderCircle',
        borderStyle: 'solid',
        borderWidth: 1,
      },
    },
  });

export default styles;
