import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      paddingVertical: 16,
      justifyContent: 'center',
    },
  },
  contentContainer: {
    base: {
      flex: 1,
      marginStart: 8,
      justifyContent: 'center',
      alignSelf: 'center',
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
    },
  },
  md: {
    base: {
      transform: [{ scaleX: 0.84 }, { scaleY: 0.86 }],
    },
  },

  lg: {
    base: {
      transform: [{ scaleX: 1.1 }, { scaleY: 1.2 }],
    },
  },
});

export default styles;
