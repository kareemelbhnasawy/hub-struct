import { responsiveHandler, s } from '@/theme';
import { StyleSheet } from 'react-native';
import { DEFAULT_ICON_SIZE } from './constants';

export const styles = (size: number = DEFAULT_ICON_SIZE) =>
  StyleSheet.create({
    'wrapper-base': {
      width: s(size) + 24,
      height: s(size) + 24,
    },
    wrapper: responsiveHandler({
      base: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9999,
      },
    }),
    'circle-bg': responsiveHandler({
      base: {
        backgroundColor: 'iconBackgroundSelected',
      },
    }),
    outline: responsiveHandler({
      base: {
        borderColor: 'borderCircle',
        borderStyle: 'solid',
        borderWidth: 1,
      },
    }),
  });
