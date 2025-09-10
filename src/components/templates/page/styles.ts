import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  safeAreaStyle: {
    base: {
      flex: 1,
      backgroundColor: 'backgroundWhite',
    },
  },
  mainWrapperViewStyle: {
    base: {
      flex: 1,
    },
  },
  mainWrapperContentContainerStyle: {
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
  whiteOverlay: {
    base: {
      opacity: 1,
    },
  },
  innerPageStylePaddings: {
    base: {
      paddingHorizontal: 20,
    },
  },
  innerPageStyle: {
    base: {
      flexGrow: 1,
    },
  },
  stickyBottom: {
    base: {
      paddingHorizontal: 20,
      paddingVertical: 24,
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: 'alphaBlack50',
      alignItems: 'center',
      backgroundColor: 'backgroundWhite',
    },
  },
});

export default styles;
