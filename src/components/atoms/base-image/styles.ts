import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme';

export const styles = StyleSheet.create({
  fullSize: responsiveHandler({
    base: {
      height: '100%',
      width: '100%',

    }
  }),
  roundedFull: responsiveHandler({
    base: {
      borderRadius: 9999,
    }
  }),
});
