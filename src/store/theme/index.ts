import { create } from 'zustand';
import ThemeState, { RNStyle, ThemeMode } from './interface';
import { Appearance } from 'react-native';
import { getString, setString } from '@/utilities';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { getThemeColor, responsiveHandler } from './utils';

const systemScheme = Appearance.getColorScheme();
const storedTheme = getString(STORAGE_KEYS.COLOR_SCHEME) as ThemeMode | null;
const initialTheme: ThemeMode =
  storedTheme || (systemScheme as ThemeMode) || 'light';

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: initialTheme,
  toggleTheme: () =>
    set((prevState) => {
      const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
      setString(STORAGE_KEYS.COLOR_SCHEME, newTheme);
      return {
        theme: newTheme,
      };
    }),
  setTheme: (theme) => {
    setString(STORAGE_KEYS.COLOR_SCHEME, theme);
    return set({ theme });
  },
  getThemeColor: (colorKey) => getThemeColor(colorKey, get().theme),
  getThemedStyles: (styles) => {
    const themedStyles: Record<string, RNStyle> = {};
    for (const key in styles) {
      themedStyles[key] = responsiveHandler(styles[key], get().theme);
    }
    return themedStyles;
  },
}));
