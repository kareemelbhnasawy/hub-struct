import { responsiveHandler } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: responsiveHandler({
    base: {
      rowGap: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'backgroundWhite',
      width: 60,
    },
  }),
  'text-wrapper': responsiveHandler({
    base: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  }),
  'icon-text': responsiveHandler({
    base: {
      textAlign: 'center',
      color: 'textTitle',
    },
  }),
});

export default styles;
