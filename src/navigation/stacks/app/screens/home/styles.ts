import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  heroContent: {
    base: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  },
  iconContainer: {
    base: {
      aspectRatio: 1,
    },
  },
  buttonContainer: {
    base: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      gap: 15,
    },
  },
  profileButton: {
    base: {
      backgroundColor: 'buttonPrimaryDefaultBackground',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 10,
    },
  },
  profileButtonText: {
    base: {
      color: 'buttonPrimaryDefaultLabel',
      fontSize: 16,
      fontWeight: '600',
    },
  },
});

export default styles;
