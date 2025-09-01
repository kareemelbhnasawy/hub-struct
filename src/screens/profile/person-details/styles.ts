import { createThemedStyles } from '@/utilities';

export const styles = createThemedStyles({
  headerContainer: {
    base: {
      paddingHorizontal: 16,
    },
  },
  justifyContent: {
    base: {
        justifyContent: 'center',
        alignItems: 'center',
    }
  },
  info: {
    base: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12
    }
  },
  backIcon: {
    base: {
      position: 'absolute',
      start: 0,
      width: 48,
      height: 48
    }
  }
});
