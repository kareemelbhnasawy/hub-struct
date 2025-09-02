import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      width: '100%',
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
      maxWidth: '85%'
    },
  },
  toggleSectionWrapper: {
    base: {
      columnGap: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  alignEnd: {
    base: {
      alignSelf: 'flex-end',
      alignContent: 'flex-end',

    }
  },
  kunyaPreviewWrapper: {
    base: {
      backgroundColor: 'backgroundTritiary',
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 16,
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
