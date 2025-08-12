import { useColorScheme } from 'react-native';
import { useState, useEffect } from 'react';
import { getString, setString } from '@/utilities/storage';
import { STORAGE_KEYS } from '@/constants/storageKeys';

const useTheme = () => {
  const systemScheme = useColorScheme();
  const defaultTheme =
    (getString(STORAGE_KEYS.COLOR_SCHEME) as 'light' | 'dark') || systemScheme;
  const [theme, setTheme] = useState<'light' | 'dark'>(defaultTheme || 'light');

  useEffect(() => {
    setString(STORAGE_KEYS.COLOR_SCHEME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
