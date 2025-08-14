import { scale, verticalScale } from 'react-native-size-matters';

/**
 * Shadow styles from the design system
 * For React Native shadow properties with responsive scaling
 */
const SHADOWS = {
  xs: {
    shadowColor: 'shadowXs',
    shadowOffset: { width: 0, height: verticalScale(1) },
    shadowOpacity: 1,
    shadowRadius: scale(2),
    elevation: scale(1),
    boxShadow: `0 ${verticalScale(1)}px ${scale(2)}px 0`,
  },
  sm: {
    shadowColor: 'shadowSm',
    shadowOffset: { width: 0, height: verticalScale(1) },
    shadowOpacity: 1,
    shadowRadius: scale(3),
    elevation: scale(2),
    boxShadow: `0 ${verticalScale(1)}px ${scale(3)}px 0, 0 ${verticalScale(1)}px ${scale(2)}px 0`,
  },
  md: {
    shadowColor: 'shadowMd',
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 1,
    shadowRadius: scale(8),
    elevation: scale(3),
    boxShadow: `0 ${verticalScale(4)}px ${scale(8)}px 0`,
  },
  lg: {
    shadowColor: 'shadowLg',
    shadowOffset: { width: 0, height: verticalScale(12) },
    shadowOpacity: 1,
    shadowRadius: scale(16),
    elevation: scale(4),
    boxShadow: `0 ${verticalScale(12)}px ${scale(16)}px ${scale(-4)}px, 0 ${verticalScale(4)}px ${scale(6)}px ${scale(-2)}px`,
  },
  xl: {
    shadowColor: 'shadowXl',
    shadowOffset: { width: 0, height: verticalScale(20) },
    shadowOpacity: 1,
    shadowRadius: scale(24),
    elevation: scale(5),
    boxShadow: `0 ${verticalScale(20)}px ${scale(24)}px ${scale(-4)}px, 0 ${verticalScale(8)}px ${scale(8)}px ${scale(-4)}px`,
  },
  '2xl': {
    shadowColor: 'shadow2xl',
    shadowOffset: { width: 0, height: verticalScale(24) },
    shadowOpacity: 1,
    shadowRadius: scale(48),
    elevation: scale(6),
    boxShadow: `0 ${verticalScale(24)}px ${scale(48)}px ${scale(-12)}px`,
  },
  '3xl': {
    shadowColor: 'shadow3xl',
    shadowOffset: { width: 0, height: verticalScale(32) },
    shadowOpacity: 1,
    shadowRadius: scale(64),
    elevation: scale(7),
    boxShadow: `0 ${verticalScale(32)}px ${scale(64)}px ${scale(-12)}px`,
  },
};

export default SHADOWS;
