import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  headerContainer: {
    base: {
      paddingHorizontal: 16,
      flexDirection: 'row',
    },
  },
  justifyContent: {
    base: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  info: {
    base: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
    },
  },
  backIcon: {
    base: {
      position: 'absolute',
      start: 0,
    },
  },
  row: {
    base: {
      flexDirection: 'row',
    },
  },
});

export default styles;
