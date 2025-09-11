import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      backgroundColor: 'backgroundWhite',
      rowGap: 20,
    },
  },
  searchItemContainer: {
    base: {
      paddingVertical: 10,
    },
  },
  tagsList: {
    base: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginVertical: 16,
    },
  },
  skillsLabel: {
    base: {
      color: 'textTertiary',
    },
  },
  searchBar: {
    base: {
      pointerEvents: 'none',
    },
  },
  skillsLabelContainer: {
    base: {
      flexDirection: 'row',
      columnGap: 4,
    },
  }
});

export default styles;
