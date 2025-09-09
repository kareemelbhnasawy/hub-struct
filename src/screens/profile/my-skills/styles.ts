import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'backgroundWhite',
    },
  },
  searchItemContainer: {
    base: {
      paddingVertical: 10
    },
  },
});

export default styles;
