import { s, vs, ms } from 'react-native-size-matters';
import {
  colorProps,
  horizontalProps,
  moderateProps,
  verticalProps,
} from './constants';
import { screenType } from '@/utilities/device-selector';
import { ThemeColorKey, themeColors } from '@/theme/theme-colors';
import {
  responsiveHandlerInputType,
  responsiveHandlerInputTypeOptions,
  RNStyle,
  ThemeType,
} from '@/types/themes';

export const scale = s;
export const verticalScale = vs;
export const moderateScale = ms;

export const getThemeColor = (
  colorKey: ThemeColorKey,
  theme: ThemeType,
): string => {
  return themeColors[colorKey][theme];
};

const autoScaleStyle = (
  style: Record<string, string | number>,
  theme: ThemeType,
  options?: responsiveHandlerInputTypeOptions,
) => {
  const scaled: Record<string, string | number> = {};
  for (const key in style) {
    const value = style[key];

    if (
      verticalProps.includes(key) &&
      typeof value === 'number' &&
      !options?.skipScale
    ) {
      scaled[key] = value;
    } else if (
      moderateProps.includes(key) &&
      typeof value === 'number' &&
      !options?.skipScale
    ) {
      scaled[key] = moderateScale(value);
    } else if (
      horizontalProps.includes(key) &&
      typeof value === 'number' &&
      !options?.skipScale
    ) {
      scaled[key] = scale(value);
    } else if (
      colorProps.includes(key) &&
      typeof value === 'string' &&
      (value as ThemeColorKey)
    ) {
      scaled[key] = getThemeColor(value as ThemeColorKey, theme);
    } else {
      scaled[key] = value;
    }
  }
  return scaled;
};

export const responsiveHandler = (
  style: responsiveHandlerInputType,
  theme: ThemeType = 'light',
): RNStyle => {
  let merged: RNStyle = {};
  switch (screenType) {
    case 'mobile':
      merged = { ...style.base, ...(style.mobile || {}) };
      break;
    case 'tablet':
      merged = { ...style.base, ...(style.tablet || {}) };
      break;
    case 'desktop':
      merged = { ...style.base, ...(style.desktop || {}) };
      break;
    default:
      merged = style.base;
  }
  return autoScaleStyle(
    merged as Record<string, string | number>,
    theme,
    style?.options,
  );
};
