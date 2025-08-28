import { createThemedStyles } from '@/utilities';

export const styles = createThemedStyles({
  wrapper: {
    base: {
      flex: 1,
      paddingHorizontal: 20,
    },
  },
  defaultText: {
    base: {
      color: 'textDefault',
      paddingHorizontal: 16,
    },
  },
  subText: {
    base: {
      paddingHorizontal: 16,
    },
  },
  headerContainer: {
    base: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 16,
    },
  },
  timerContainer: {
    base: {
      alignItems: 'center',
      marginTop: 24,
    },
  },
  timer: {
    base: {
      textAlign: 'center',
      color: 'textPrimary'
    },
  },
  defaultTextColor: {
    base: {
      color: 'textDefault',
    },
  },
  pinCodeWrapper: {
    base: {
      paddingHorizontal: 16,
    },
  },
  resendContainer: {
    base: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  resendButton: {
    base: {
      color: 'linkPrimaryDefaultLabel',
    },
  },
});
