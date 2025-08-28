import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: 'backgroundBody',
    },
  },
  content: {
    base: {
      marginVertical: 30,
      alignItems: 'center',
      gap: 10,
    },
  },
  infoText: {
    base: {
      fontSize: 16,
      color: 'textSecondaryParagraph',
      marginBottom: 5,
    },
  },
  buttonContainer: {
    base: {
      marginTop: 20,
    },
  },
  button: {
    base: {
      backgroundColor: 'buttonPrimaryDefaultBackground',
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 8,
      minWidth: 200,
      alignItems: 'center',
    },
  },
  buttonText: {
    base: {
      color: 'buttonPrimaryDefaultLabel',
      fontSize: 16,
      fontWeight: '600',
    },
  },
});

export default styles;
