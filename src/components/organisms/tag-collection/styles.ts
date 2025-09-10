import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'backgroundWhite',
    },
  },
  tagsList: {
    base: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
      columnGap: 8,
      marginVertical: 16,
    },
  },
  skillsLabel: {
    base: {
      width: '100%',
      textAlign: 'left',
    },
  },
  highlightedTagContainer: {
    base: {
      backgroundColor: 'tagBackgroundHighlight',
    },
  },
});

export default styles;
