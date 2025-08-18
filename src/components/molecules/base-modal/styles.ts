import { createThemedStyles } from '@/utilities';

export const styles = createThemedStyles({
  container: {
    base: {
      backgroundColor: 'backgroundWhite',
      width: '80%',
      borderRadius: 16,
      padding: 20,
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      rowGap: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  overlay: {
    base: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'alphaBlack80'
    },
  },
});
