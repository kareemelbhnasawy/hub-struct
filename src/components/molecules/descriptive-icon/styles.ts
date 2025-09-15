import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  wrapper: {
    base: {
      display: 'flex',
      // backgroundColor: 'backgroundWhite',
      alignItems: 'center',
    },
  },
  isColumn: {
    base: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'backgroundWhite',
      width: 60,
    },
  },
  isRow: {
    base: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      columnGap: 10,
    },
  },
  textWrapper: {
    base: {
      // flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  iconText: {
    base: {
      textAlign: 'center',
      color: 'textDefault',
    },
  },
});

export default styles;
