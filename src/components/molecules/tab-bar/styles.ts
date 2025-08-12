import { StyleSheet } from 'react-native';
import { responsiveHandler, scale } from '@/theme';

export const styles = StyleSheet.create({
  container: responsiveHandler({
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: -10,
      paddingHorizontal: 32,
      paddingVertical: 16,
    },
  }),
  tabBarButtonsContainer: responsiveHandler({
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: -10,
      position: 'relative',
    },
  }),
  tabBarGlassBackground: responsiveHandler({
    base: {
      position: 'absolute',
      width: scale(276),
      height: scale(53),
      borderRadius: 1000,
      backgroundColor: '#F7F7F7',
      left: -52,
      bottom: -4.5,
      zIndex: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
  }),
});
