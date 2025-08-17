import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  wrapper: {
    base: {
      rowGap: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'backgroundWhite',
      width: 60,
    },
  },
  textWrapper: {
    base: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  iconText: {
    base: {
      textAlign: 'center',
      color: 'textTitle',
    },
  },
});

export default styles;
