import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      backgroundColor: 'backgroundBody',
    },
  },
  isColumn: {
    base: {
      width: '100%',
      flexDirection: 'column',
      alignContent: 'flex-start',
      rowGap: 10
    },
  },
  badgeRow: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  detailsRow: {
    base: {
      flexDirection: 'row',
      columnGap: 10
    },
  },
  iconContainer: {
    base: {
      backgroundColor: 'badgeBrandOrangeBackground',
      width: 24,
      aspectRatio: 1,
    }
  }
});


export default styles;
