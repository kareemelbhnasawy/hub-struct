import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  backdrop: {
    base: {
      flex: 1,
      backgroundColor: 'alphaBlack40',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  glassContainer: {
    base: {
      backgroundColor: 'alphaWhite70',
      width: '80%',
    },
  },
});

export default styles;
