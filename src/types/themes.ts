import { ThemeColorKey } from '@/theme/theme-colors';
import { TextStyle, ViewStyle } from 'react-native';

type ThemeType = 'light' | 'dark';

type ThemedStyles<T extends Record<string, responsiveHandlerInputType>> = T;

interface RNStyle extends ViewStyle, TextStyle {}

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
  shadowColor?: ThemeColorKey;
}

interface responsiveHandlerInputTypeOptions {
  skipScale?: boolean; // Optional property to skip scaling
}

interface responsiveHandlerInputType {
  base: StyleWithThemeColors;
  tablet?: StyleWithThemeColors;
  mobile?: StyleWithThemeColors;
  desktop?: StyleWithThemeColors;
  options?: responsiveHandlerInputTypeOptions;
}

type GetThemedStyleInputType = Record<string, responsiveHandlerInputType>;

export type {
  ThemeType,
  ThemedStyles,
  RNStyle,
  StyleWithThemeColors,
  responsiveHandlerInputTypeOptions,
  responsiveHandlerInputType,
  GetThemedStyleInputType,
};
