import { verticalScale } from '@/store/theme/utils';
import { createThemedStyles } from '@/utilities';
import { StyleSheet } from 'react-native';

export const styles = createThemedStyles({
  wrapper: {
    base: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  },
  absoluteFill: {
    base: {
      ...StyleSheet.absoluteFill,
    },
  },
  contentWrapper: {
    base: {
      alignItems: 'center',
      rowGap: 200,
      flex: 1,
      top: verticalScale(180),
    },
  },
  logo: {
    base: {
      height: 80,
      width: 100,
    },
  },
});
