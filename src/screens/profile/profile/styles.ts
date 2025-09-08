import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'backgroundWhite',
    },
  },
  banner: {
    base: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column',
    },
  },
  avatar: {
    base: {
      marginTop: 'auto',
    },
  },
  titleWrapper: {
    base: {
      alignItems: 'center',
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
});

export default styles;
