import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'backgroundPrimary',
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
