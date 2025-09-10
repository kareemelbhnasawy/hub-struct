import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      gap: 2,
    },
  },
  iconDescriptiveOrange: {
    base: {
      backgroundColor: 'backgroundBrandOrangeLight',
    },
  },
  info: {
    base: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      alignItems: 'center',
    },
  },
  countWrapper: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
  },
  count: {
    base: {
      color: 'textTertiary',
    },
  },
  colorTertiary: {
    base: {
      color: 'textTertiary',
    },
  }
});

export default styles;