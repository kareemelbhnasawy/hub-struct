import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  headerMain: {
    base: {
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      columnGap: 16,
      backgroundColor: 'backgroundWhite',
    },
  },
  textWrapper: {
    base: {
      flex: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  fontColor: {
    base: {
      flex: 1,
      color: 'textDefault',
      textAlign: 'left',
    },
  },
  titleAlignCenter: {
    base: {
      textAlign: 'center',
    },
  },
  startIconsWrapper: {
    base: {
      justifyContent: 'flex-start',
    },
  },
  endIconsWrapper: {
    base: {
      justifyContent: 'flex-end',
    },
  },
  iconWrapper: {
    base: {
      flex: 2,
      flexDirection: 'row',
      columnGap: 12,
      alignItems: 'center',
      backgroundColor: 'alphaBlack40',
    },
  },
});

export default styles;
