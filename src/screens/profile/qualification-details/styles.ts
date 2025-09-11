import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      gap: 2,
    },
  },

  iconDescriptiveGreen: {
    base: {
      backgroundColor: 'backgroundBrandGreenLight',
    },
  },
  iconDescriptiveOrange: {
    base: {
      backgroundColor: 'backgroundBrandOrangeLight',
    },
  },
  iconDescriptiveTeal: {
    base: {
      backgroundColor: 'backgroundBrandTealLight',
    },
  },
  mutedTitle: {
    base: {
      color: 'textTertiary',
    },
  },
  info: {
    base: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
    },
  },
  pdfImg: {
    base: {
      width: 20,
      height: 20,
      overflow: 'hidden'
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
