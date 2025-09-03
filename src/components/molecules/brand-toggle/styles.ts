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
      marginStart: 8,
      justifyContent: 'center',
    },
  },
  description: {
    base: {
      color: 'textSecondary',
      marginTop: 4,
    },
  },
  title: {
    base: {
      color: 'textBrandPrimary',
      flex: 1,
    },
  },
  mdToggleWidth: {
    base: {
      width: 36
    }
  },

  mdToggleHeight: {
    base: {
      height: 20
    }
  },

  lgToggleWidth: {
    base: {
      width: 44
    }
  },

  lgToggleHeight: {
    base: {
      height: 24
    }
  },
});

export default styles;
