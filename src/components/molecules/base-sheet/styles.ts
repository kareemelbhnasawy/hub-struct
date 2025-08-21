import { createThemedStyles } from '@/utilities';

export const styles = createThemedStyles({
  containerWrapper: {
    base: {
      backgroundColor: 'alphaBlack90',
      paddingVertical: 15,
      paddingHorizontal: 10,
      display: 'flex',
      flexDirection: 'column',
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
    },
  },
  heading: {
    base: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  hasVerticalGap: {
    base: {
      rowGap: 20,
    },
  },
});
