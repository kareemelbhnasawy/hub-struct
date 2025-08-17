import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  'safe-area-style': {
    base: {
      flex: 1,
      backgroundColor: 'backgroundWhite',
    },
  },
  'main-wrapper-view-style': {
    base: {
      flex: 1,
    },
  },
  'main-wrapper-content-container-style': {
    base: {
      flexGrow: 1,
    },
  },
  loading: {
    base: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'backgroundNeutral400',
      opacity: 0.6,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  'inner-page-style': {
    base: {
      paddingHorizontal: 20,
      flexGrow: 1,
    },
  },
});

export default styles;
