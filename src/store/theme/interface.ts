import { ThemeColorKey } from '@/theme/theme-colors';
import { RNStyle, ThemeType } from '@/types/themes';

interface ThemeState {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
  getThemedStyles: <T>(styles: T) => { [k in keyof T]: RNStyle };
  getThemeColor: (colorKey: ThemeColorKey) => string;
}
export default ThemeState;
