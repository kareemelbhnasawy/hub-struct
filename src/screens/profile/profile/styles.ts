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
      marginTop: 'auto',
    },
  },
  titleWrapper: {
    base: {
      alignItems: 'center',
    },
  },

});

export default styles;
