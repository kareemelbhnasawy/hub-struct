import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'backgroundBody',
    },
  },
  banner: {
    base: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column'
    },
  },
  avatar: {
    base: {
    },
  },
  titleWrapper: {
    base: {
      alignItems: 'center',
    },
  },
  listItemContainer: {
    base: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 16,
      width: '100%',
    }
  },
});

export default styles;
