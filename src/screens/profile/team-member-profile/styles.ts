import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  tabContainer: {
    base: {
      backgroundColor: 'backgroundWhite',
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
  iconDescriptiveGreen: {
    base: {
      backgroundColor: 'backgroundBrandGreenLight',
    },
  },
  container: {
    base: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 20,
      backgroundColor: 'backgroundWhite',
    },
  },
});

export default styles;
