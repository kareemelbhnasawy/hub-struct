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
  mapViewHeight: {
    base: {
      height: 300,
    },
  },
  pagePadding: {
    base: {
      paddingHorizontal: 20,
    },
  },
  valueText: {
    base: {
      maxWidth: '60%',
      overflow: 'hidden',
      color: 'textBrandPrimary',
    },
  },
});

export default styles;
