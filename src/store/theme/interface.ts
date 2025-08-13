import { ThemeColorKey } from '@/theme/theme-colors';
import { TextStyle, ViewStyle } from 'react-native';

export type ThemeMode = 'light' | 'dark';

export interface RNStyle extends ViewStyle, TextStyle {}

export interface StyleWithThemeColors
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

export interface responsiveHandlerInputTypeOptions {
  skipScale?: boolean; // Optional property to skip scaling
}

export interface responsiveHandlerInputType {
  base: StyleWithThemeColors;
  tablet?: StyleWithThemeColors;
  mobile?: StyleWithThemeColors;
  desktop?: StyleWithThemeColors;
  options?: responsiveHandlerInputTypeOptions;
}

export type getThemedStyleInputType = Record<
  string,
  responsiveHandlerInputType
>;

interface ThemeState {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  getThemedStyles: (styles: getThemedStyleInputType) => Record<string, RNStyle>;
  getThemeColor: (colorKey: ThemeColorKey) => string;
}
export default ThemeState;
