import { responsiveHandler } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerWrapper: responsiveHandler({
    base: {
      backgroundColor: 'surfaceOncolor',
      paddingVertical: 15,
      paddingHorizontal: 10,
      display: 'flex',
      flexDirection: 'column',
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
    }
  }),
  heading: responsiveHandler({
    base: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  }),
  hasVerticalGap: responsiveHandler({
    base: {
      rowGap: 20,
    }
  }),
});
