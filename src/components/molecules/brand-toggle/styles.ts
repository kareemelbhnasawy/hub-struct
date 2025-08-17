import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      paddingVertical: 16,
    },
  },
  contentContainer: {
    base: {
      flex: 1,
      marginStart: 16,
    },
  },
  description: {
    base: {
      color: 'textToggleTitle',
      marginTop: 4,
    },
  },
  title: {
    base: {
      color: 'textToggleTitle',
    },
  },
});

export default styles;
