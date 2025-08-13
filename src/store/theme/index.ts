import { create } from 'zustand';
import ThemeState from './interface';
import { Appearance } from 'react-native';
import { getString, setString } from '@/utilities';
import { STORAGE_KEYS } from '@/constants/storageKeys';

const systemScheme = Appearance.getColorScheme();
const defaultTheme =
  (getString(STORAGE_KEYS.COLOR_SCHEME) as 'light' | 'dark') ||
  systemScheme ||
  'light';

export const useThemeStore = create<ThemeState>((set) => ({
  theme: defaultTheme,
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
}));
