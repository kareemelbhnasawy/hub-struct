import { createThemedStyles } from '@/utilities';

export const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  tealText: {
    base: {
      color: 'textBrandTeal',
      alignSelf: 'center',
      lineHeight: 30,
    },
  },
  orderNumberContainer: {
    base: {
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: 5,
    },
  },
  buttonContainer: {
    base: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '80%',
    },
  },
  paragraphText: {
    base: {
      textAlign: 'center',
      maxWidth: 270,
    },
  },
});
