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
  selectedTabContainer: responsiveHandler({
    base: {
      position: 'relative',
      alignItems: 'center',
      gap: -10,
    },
  }),
  glassMorphBackground: responsiveHandler({
    base: {
      position: 'absolute',
      width: scale(62),
      height: scale(62),
      borderRadius: 1000,
      backgroundColor: '#F7F7F7',
      left: -4,
      top: -4,
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
  selectedTabButton: responsiveHandler({
    base: {
      width: scale(54),
      height: scale(54),
      borderRadius: 100,
      backgroundColor: '#F2F2F2',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
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
  defaultTabButton: responsiveHandler({
    base: {
      width: scale(96),
      height: scale(45),
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      paddingHorizontal: 8,
      paddingVertical: 6,
    },
  }),
  iconContainer: responsiveHandler({
    base: {
      width: scale(32),
      height: scale(32),
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
});
