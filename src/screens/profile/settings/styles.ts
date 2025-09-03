import { Radius } from '@/style';
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
  alignSelfStart: {
    base: {
      alignSelf: 'flex-start',
    },
  },
  textAlignRight: {
    base: {
      textAlign: 'right',
    },
  },
  round: {
    base: {
      borderRadius: Radius.FULL,
    },
  },
});

export default styles;
