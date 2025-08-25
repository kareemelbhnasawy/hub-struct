import { createThemedStyles } from '@/utilities';
import { scale } from 'react-native-size-matters';

export const styles = createThemedStyles({
  wrapper: {
    base: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  },
  animationBG: {
    base: {
      position: 'absolute',
      top: 0,
      flex: 1,
      height: scale(600),
      width: scale(300),
    },
  },
  absoluteFill: {
    base: {
      height: scale(600),
      width: scale(300),
      flex: 1,
      bottom: 0,
      start: 0,
      position: 'absolute',
      end: 0,
      top: 0,
    },
  },
  contentWrapper: {
    base: {
      alignItems: 'center',
      rowGap: 200,
      flex: 1,
      top: scale(180),
    },
  },
  logo: {
    base: {
      height: scale(80),
      width: scale(100),
    },
  },
});
