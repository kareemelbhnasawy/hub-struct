import { useColorScheme } from 'react-native';
import { useState, useEffect } from 'react';
import { setString } from '@/utilities/storage';
import { STORAGE_KEYS } from '@/constants/storageKeys';

const useTheme = () => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState<'light' | 'dark'>(systemScheme || 'light');

  useEffect(() => {
    setString(STORAGE_KEYS.COLOR_SCHEME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
