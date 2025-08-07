import { useColorScheme } from 'react-native';
import { useState, useEffect } from 'react';
import { useColorScheme as useNativewindColorScheme } from 'nativewind';

const useTheme = () => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState<'light' | 'dark'>(systemScheme || 'light');

  const setColorScheme = useNativewindColorScheme().setColorScheme.bind(this);

  useEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export { useTheme };
