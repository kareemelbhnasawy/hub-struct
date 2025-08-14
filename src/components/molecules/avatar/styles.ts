import { responsiveHandler, scale } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bgIconBackgroundDefault: responsiveHandler({
    base: {
      backgroundColor: 'iconBackgroundDefault',
    }
  }),
  flex: responsiveHandler({
    base: {
      display: 'flex',
    }
  }),
  itemsCenter: responsiveHandler({
    base: {
      alignItems: 'center',
    }
  }),
  justifyCenter: responsiveHandler({
    base: {
      justifyContent: 'center',
    }
  }),
  roundedFull: responsiveHandler({
    base: {
      borderRadius: 9999,
    },
  }),
  lg: {
    height: scale(48),
    width: scale(48)
  },
  md: {
    height: scale(32),
    width: scale(32)
  },
  sm: {
    height: scale(24),
    width: scale(24)
  },
  xl: {
    height: scale(72),
    width: scale(72)
  },
  textWhite: responsiveHandler({
    base: {
      color: 'textOncolorPrimary',
    }
  })
});
