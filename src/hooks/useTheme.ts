import { useColorScheme } from 'react-native';
import { useState, useEffect } from 'react';

const useTheme = () => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState<'light' | 'dark'>(systemScheme || 'light');

  const setColorScheme = (theme: 'light' | 'dark') => {
    console.log(`Setting theme to: ${theme}`);
    // Here you can add logic to persist the theme, using MMKV
  };

  useEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export { useTheme };
