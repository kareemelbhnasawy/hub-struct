import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { s, vs, ms } from 'react-native-size-matters';
import { getThemeColor, ThemeColorKey, themeColors } from './theme-colors';
import { screenType } from '@/utilities/device-selector';

export const scale = s;
export const verticalScale = vs;
export const moderateScale = ms;

const verticalProps = [
  'marginVertical',
  'marginTop',
  'marginBottom',
  'paddingVertical',
  'paddingTop',
  'paddingBottom',
  'top',
  'bottom',
  'height',
  'minHeight',
  'maxHeight',
  'columnGap',
];

const horizontalProps = [
  'marginStart',
  'marginEnd',
  'paddingStart',
  'paddingEnd',
  'left',
  'right',
  'width',
  'minWidth',
  'maxWidth',
  'gap',
  'rowGap',
  'borderWidth',
];

const moderateProps = ['fontSize', 'borderRadius', 'lineHeight'];

const colorProps = ['color', 'backgroundColor', 'borderColor'];

type RNStyle = ViewStyle & TextStyle & ImageStyle;

interface StyleWithThemeColors
  extends Omit<
    RNStyle,
    | 'color'
    | 'backgroundColor'
    | 'borderColor'
    | 'margin'
    | 'padding'
    | 'paddingLeft'
    | 'paddingRight'
    | 'marginLeft'
    | 'marginRight'
    | 'boxShadow'
    | 'shadowColor'
  > {
  color?: ThemeColorKey;
  backgroundColor?: ThemeColorKey;
  borderColor?: ThemeColorKey;
}

const autoScaleStyle = (style: StyleWithThemeColors): Record<string, string | number> => {
  const scaled: Record<string, string | number> = {};
  for (const key in style) {
    const value = (style as any)[key];

    if (verticalProps.includes(key) && typeof value === 'number') {
      scaled[key] = verticalScale(value);
    } else if (moderateProps.includes(key) && typeof value === 'number') {
      scaled[key] = moderateScale(value);
    } else if (horizontalProps.includes(key) && typeof value === 'number') {
      scaled[key] = scale(value);
    } else if (
      colorProps.includes(key) &&
      typeof value === 'string' &&
      (value as ThemeColorKey) in themeColors
    ) {
      scaled[key] = getThemeColor(value as ThemeColorKey);
    } else {
      scaled[key] = value;
    }
  }
  return scaled;
};

export const responsiveHandler = (style: {
  base: StyleWithThemeColors;
  mobile?: StyleWithThemeColors;
  tablet?: StyleWithThemeColors;
  desktop?: StyleWithThemeColors;
}): Record<string, string | number> => {
  let merged: StyleWithThemeColors;
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
  return autoScaleStyle(merged);
};
