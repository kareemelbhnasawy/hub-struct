import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: 'backgroundBody',
    },
  },
  buttonContainer: {
    base: {
      marginTop: 30,
      gap: 15,
    },
  },
  button: {
    base: {
      backgroundColor: 'green',
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
  localeText: {
    base: {
      marginTop: 20,
      fontSize: 14,
      color: 'textSecondaryParagraph',
    },
  },
});

export default styles;
