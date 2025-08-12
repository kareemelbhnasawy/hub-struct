import { StyleSheet } from 'react-native';
import { responsiveHandler } from '@/theme/theme-responsive';

export const styles = StyleSheet.create({
  divider: responsiveHandler({
    base: {
      backgroundColor: 'iconNeutral',
      height: 1,
      width: '100%',
    },
  }),
  xxs: responsiveHandler({
    base: {
      height: 2,
    },
  }),
  xs: responsiveHandler({
    base: {
      height: 4,
    },
  }),
  sm: responsiveHandler({
    base: {
      height: 6,
    },
  }),
  md: responsiveHandler({
    base: {
      height: 8,
    },
  }),
  lg: responsiveHandler({
    base: {
      height: 12,
    },
  }),
  xl: responsiveHandler({
    base: {
      height: 16,
    },
  }),
  '2xl': responsiveHandler({
    base: {
      height: 20,
    },
  }),
  '3xl': responsiveHandler({
    base: {
      height: 24,
    },
  }),
  '4xl': responsiveHandler({
    base: {
      height: 32,
    },
  }),
  '5xl': responsiveHandler({
    base: {
      height: 40,
    },
  }),
  '6xl': responsiveHandler({
    base: {
      height: 48,
    },
  }),
  '7xl': responsiveHandler({
    base: {
      height: 64,
    },
  }),
  '8xl': responsiveHandler({
    base: {
      height: 80,
    },
  }),
  '9xl': responsiveHandler({
    base: {
      height: 96,
    },
  }),
  '10xl': responsiveHandler({
    base: {
      height: 128,
    },
  }),
  '11xl': responsiveHandler({
    base: {
      height: 160,
    },
  }),
});
