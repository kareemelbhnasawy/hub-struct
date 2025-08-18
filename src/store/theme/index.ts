import { create } from 'zustand';
import ThemeState from './interface';
import { Appearance } from 'react-native';
import { getThemeColor, responsiveHandler } from './utils';
import { persist } from 'zustand/middleware';
import { getMMKVStorage } from '../mmkv-storage';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { responsiveHandlerInputType, RNStyle, ThemeType } from '@/types/themes';

const systemScheme = Appearance.getColorScheme();
const initialTheme: ThemeType = (systemScheme as ThemeType) || 'light';

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
          themedStyles[key] = responsiveHandler(
            styles[key] as responsiveHandlerInputType,
            get().theme,
          );
        }
        return themedStyles as { [k in keyof typeof styles]: RNStyle };
      },
    }),
    { name: STORAGE_KEYS.COLOR_SCHEME, storage: getMMKVStorage<ThemeState>() },
  ),
);

export { useThemeStore };
