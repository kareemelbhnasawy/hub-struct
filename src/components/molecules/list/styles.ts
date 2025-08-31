import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  emptyComponentContainer: {
    base: {
      alignItems: 'center',
      alignContent: 'center',
      paddingVertical: 48,
      paddingHorizontal: 32,
      rowGap: 16,
    },
  },
  textAlignCenter: {
    base: {
      textAlign: 'center',
    },
  },
  alignSelfCenter: {
    base: {
      alignSelf: 'center',
    },
  },
  loadMoreSpinnerStyle: {
    base: {
      alignSelf: 'center',
      paddingTop: 10,
    },
  },
});

export default styles;
