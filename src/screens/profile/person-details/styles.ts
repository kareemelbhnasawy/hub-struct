import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  headerContainer: {
    base: {
      paddingHorizontal: 16,
      flexDirection: 'row',
    },
  },
  justifyContent: {
    base: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  info: {
    base: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
    },
  },
  backIcon: {
    base: {
      position: 'absolute',
      start: 0,
    },
  },
  row: {
    base: {
      flexDirection: 'row',
    },
  },
  mobileInput: {
    base: {
      borderWidth: 1,
      borderRadius: 8,
      padding: 12,
      marginTop: 8,
      marginBottom: 16,
      fontSize: 18,
    },
  },
  maskedNumber: {
    base: {
      marginBottom: 8,
      fontSize: 16,
      color: 'textSecondary',
      letterSpacing: 2,
    },
  },
  bottomSheetContainer: {
    base: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
  },
  iconDescriptiveYellow: {
    base: {
      backgroundColor: 'iconDescriptiveYellow',
    },
  },
  iconDescriptiveGreen: {
    base: {
      backgroundColor: 'iconDescriptiveGreen',
    },
  },
});

export default styles;
