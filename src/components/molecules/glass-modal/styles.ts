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
      backgroundColor: 'alphaBlack10',
      paddingHorizontal: 14,
      paddingVertical: 14,
      width: '80%',
    },
  },
});

export default styles;
