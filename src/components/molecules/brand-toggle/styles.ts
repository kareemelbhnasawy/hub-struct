import { StyleSheet } from 'react-native';
import { getThemeColor } from '../../../theme/themeColors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: 16,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 16,
  },
  description: {
    color: getThemeColor('textToggleSubtitle'),
    fontSize: 12,
    marginTop: 4,
  },
  title: {
    color: getThemeColor('textToggleTitle'),
    fontSize: 14,
    fontWeight: '500',
  },
});
