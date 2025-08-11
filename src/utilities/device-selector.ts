import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

export const screenType =
  width >= breakpoints.desktop
    ? 'desktop'
    : width >= breakpoints.tablet
      ? 'tablet'
      : 'mobile';

/**
 * Get value based on device type.
 * This function is used to match values for different device types.
 * It returns the value for the current device type based on the provided object.
 * Mobile parameter is the fallback parameter
 */
export const matchDeviceValue = <T>(obj: {
  mobile: T;
  tablet: T;
  desktop: T;
}): T => {
  if (screenType === 'desktop') return obj.desktop;
  if (screenType === 'tablet') return obj.tablet;
  return obj.mobile;
};
