import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'backgroundBody',
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
  iconDescriptiveOrange: {
    base: {
      backgroundColor: 'iconDescriptiveOrange',
    },
  },
  iconDescriptiveTeal: {
    base: {
      backgroundColor: 'iconDescriptiveTeal',
    },
  },
  iconDescriptiveBlue: {
    base: {
      backgroundColor: 'iconDescriptiveBlue',
    },
  },
  iconDescriptiveTransparent: {
    base: {
      backgroundColor: 'transparent',
    },
  },
  paddingVertical0: {
    base: {
      paddingVertical: 0,
    },
  },
  textAlignRight: {
    base: {
      textAlign: 'right',
    },
  },
});

export default styles;
