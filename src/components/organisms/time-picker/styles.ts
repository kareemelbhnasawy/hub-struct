import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  flexOne: {
    base: {
      flex: 1,
    },
  },
  timePickerContainer: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
  },
  wheelContainer: {
    base: {
      flex: 1,
      alignItems: 'center',
    },
  },
  separatorContainer: {
    base: {
      marginHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  selectedItemBackground: {
    base: {
      position: 'absolute',
      width: '100%',
      height: 36,
      borderRadius: 8,
      backgroundColor: 'backgroundBrandPrimaryLight',
      alignSelf: 'center',
    },
  },
  wheelPickerWrapper: {
    base: {
      height: 200,
      position: 'relative',
    },
  },
  wheelPickerItem: {
    base: {
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  selectedText: {
    base: {
      fontSize: 32,
      lineHeight: 36,
    },
  },
  nextText: {
    base: {
      fontSize: 24,
      lineHeight: 28,
    },
  },
  afterNextText: {
    base: {
      fontSize: 20,
      lineHeight: 24,
    },
  },
  afterAfterNextText: {
    base: {
      fontSize: 16,
      lineHeight: 20,
    },
  },
});

export default styles;
