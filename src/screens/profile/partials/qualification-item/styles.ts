import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      flexDirection: 'column',
      rowGap: 10,
      paddingVertical: 24,
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
  },
  chevronIconContainer: {
    base: {
      backgroundColor: 'backgroundSecondary',
    }
  }
});


export default styles;
