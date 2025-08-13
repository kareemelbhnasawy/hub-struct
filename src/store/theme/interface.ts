import { ThemeType } from '@/types';

interface ThemeState {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}
export default ThemeState;
