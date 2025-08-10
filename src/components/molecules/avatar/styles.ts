import { getThemeColor, themeColors } from '@/theme/themeColors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bgIconBackgroundDefault: {
    backgroundColor: getThemeColor('iconBackgroundDefault'),
  },
  flex: {
    display: 'flex',
  },
  fontSize_lg: {
    fontSize: 16
  },
  fontSize_md: {
    fontSize: 14
  },
  fontSize_sm: {
    fontSize: 10
  },
  fontSize_xl: {
    fontSize: 20
  },
  itemsCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  roundedFull: {
    borderRadius: 9999,
  },
  size_lg: {
    height: 48,
    width: 48
  },
  size_md: {
    height: 32,
    width: 32
  },
  size_sm: {
    height:24,
    width: 24
  },
  size_xl: {
    height: 72,
    width: 72
  },
  textWhite: {
    color: themeColors.textDefault.dark,
  }
});
