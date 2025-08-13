import { responsiveHandler } from '@/theme';
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
  lg: responsiveHandler({
    base: {
      height: 48,
      width: 48
    }
  }),
  md: responsiveHandler({
    base: {
      height: 32,
      width: 32
    }
  }),
  sm: responsiveHandler({
    base: {
      height: 24,
      width: 24
    }
  }),
  xl: responsiveHandler({
    base: {
      height: 72,
      width: 72
    }
  }),
  textWhite: responsiveHandler({
    base: {
      color: 'textOncolorPrimary',
    }
  })
});
