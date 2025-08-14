import { create } from 'zustand';
import ThemeState, { RNStyle, ThemeMode } from './interface';
import { Appearance } from 'react-native';
import { getThemeColor, responsiveHandler } from './utils';
import { persist } from 'zustand/middleware';
import { getMMKVStorage } from '../mmkv-storage';
import { STORAGE_KEYS } from '@/constants/storageKeys';

const systemScheme = Appearance.getColorScheme();
const initialTheme: ThemeMode = (systemScheme as ThemeMode) || 'light';

const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: initialTheme,
      toggleTheme: () =>
        set((prevState) => ({
          theme: prevState.theme === 'light' ? 'dark' : 'light',
        })),
      setTheme: (theme) => set({ theme }),
      getThemeColor: (colorKey) => getThemeColor(colorKey, get().theme),
      getThemedStyles: (styles) => {
        const themedStyles: Record<string, RNStyle> = {};
        for (const key in styles) {
          themedStyles[key] = responsiveHandler(styles[key], get().theme);
        }
        return themedStyles;
      },
    }),
    { name: STORAGE_KEYS.COLOR_SCHEME, storage: getMMKVStorage<ThemeState>() },
  ),
);

export { useThemeStore };
