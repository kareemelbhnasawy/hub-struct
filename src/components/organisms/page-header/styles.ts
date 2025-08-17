import { scale } from '@/store/theme/utils';
import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  headerMain: {
    base: {
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      columnGap: 16,
      backgroundColor: 'backgroundWhite',
    },
  },
  textWrapper: {
    base: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  fontColor: {
    base: {
      flex: 1,
      color: 'textDefault',
      textAlign: 'left',
    },
  },
  titleAlignCenter: {
    base: {
      textAlign: 'center',
    },
  },
  endIconsWrapper: {
    base: {
      flexDirection: 'row',
      columnGap: 12,
      alignItems: 'center',
    },
  },
  iconWrapper: {
    base: { minWidth: scale(24) + 24, minHeight: scale(24) + 24 },
    options: { skipScale: true },
  },
});

export default styles;
