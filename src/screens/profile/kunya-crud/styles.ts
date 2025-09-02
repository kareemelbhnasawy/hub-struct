import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
    },
  },
  isRow: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  headlineWrapper: {
    base: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  toggleSectionWrapper: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  kunyaPreviewWrapper: {
    base: {
      backgroundColor: 'backgroundTritiary',
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  isCentered: {
    base: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

export default styles;
