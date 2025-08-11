import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';

export const styles = StyleSheet.create({
  divider: responsiveHandler({
    base: {
      color: 'iconNeutral',
      height: 2,
      width: '80%',
    },
  }),
  xxs: responsiveHandler({
    base: {
      height: 2,
      width: 2,
    },
  }),
  xs: responsiveHandler({
    base: {
      height: 4,
      width: 4,
    },
  }),
  sm: responsiveHandler({
    base: {
      height: 6,
      width: 6,
    },
  }),
  md: responsiveHandler({
    base: {
      height: 8,
      width: 8,
    },
  }),
  lg: responsiveHandler({
    base: {
      height: 12,
      width: 12,
    },
  }),
  xl: responsiveHandler({
    base: {
      height: 16,
      width: 16,
    },
  }),
  '2xl': responsiveHandler({
    base: {
      height: 20,
      width: 20,
    },
  }),
  '3xl': responsiveHandler({
    base: {
      height: 24,
      width: 24,
    },
  }),
  '4xl': responsiveHandler({
    base: {
      height: 32,
      width: 32,
    },
  }),
  '5xl': responsiveHandler({
    base: {
      height: 40,
      width: 40,
    },
  }),
  '6xl': responsiveHandler({
    base: {
      height: 48,
      width: 48,
    },
  }),
  '7xl': responsiveHandler({
    base: {
      height: 64,
      width: 64,
    },
  }),
  '8xl': responsiveHandler({
    base: {
      height: 80,
      width: 80,
    },
  }),
  '9xl': responsiveHandler({
    base: {
      height: 96,
      width: 96,
    },
  }),
  '10xl': responsiveHandler({
    base: {
      height: 128,
      width: 128,
    },
  }),
  '11xl': responsiveHandler({
    base: {
      height: 160,
      width: 160,
    },
  }),
});
