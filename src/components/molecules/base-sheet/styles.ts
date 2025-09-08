import { createThemedStyles } from '@/utilities';

export const styles = createThemedStyles({
  containerWrapper: {
    base: {
      backgroundColor: 'alphaBlack90',
      paddingVertical: 15,
      paddingHorizontal: 10,
      display: 'flex',
      flexDirection: 'column',
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
    },
  },
  heading: {
    base: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  bottomSheetContainer: {
    base: {
      rowGap: 20,
      flex: 1,
      height: '100%',
    },
  },
  headerCenterWithClose: {
    base: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
  },
  headerCenter: {
    base: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  closeButtonAbsolute: {
    base: {
      position: 'absolute',
      end: 0,
    },
  },
  marginTopAuto: {
    base: {
      marginTop: 'auto',
    },
  },
});
