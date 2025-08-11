import { responsiveHandler, s } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = (size: number = 24) =>
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
        borderColor: 'borderIcon',
        borderStyle: 'solid',
        borderWidth: 1,
      },
    }),
  });
