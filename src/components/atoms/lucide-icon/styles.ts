import { getThemedStyleInputType } from '@/store/theme/interface';
import { DEFAULT_ICON_SIZE } from './constants';
import { scale } from '@/store/theme/utils';

export const styles = (
  size: number = DEFAULT_ICON_SIZE,
): getThemedStyleInputType => ({
  'wrapper-base': {
    base: { width: scale(size) + 24, height: scale(size) + 24 },
    options: { skipScale: true },
  },

  wrapper: {
    base: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 9999,
    },
  },
  'circle-bg': {
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
