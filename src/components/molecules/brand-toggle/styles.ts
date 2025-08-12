import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';

export const styles = StyleSheet.create({
  container: responsiveHandler({
    base: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      paddingVertical: 16,
    },
  }),
  contentContainer: responsiveHandler({
    base: {
      flex: 1,
      marginStart: 16,
    },
  }),
  description: responsiveHandler({
    base: {
      color: 'textToggleTitle',
      fontSize: 12,
      marginTop: 4,
    },
  }),
  title: responsiveHandler({
    base: {
      color: 'textToggleTitle',
      fontSize: 14,
    },
  }),
});
