import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      width: '100%',
    },
  },
  statsRow: {
    base: {
      flexDirection: 'row',
      columnGap: 12,
      marginBottom: 12,
    },
  },
  stat: {
    base: {
      flex: 1,
    },
  },
  list: {
    base: {
      marginTop: 12,
    },
  },
});

export default styles;

