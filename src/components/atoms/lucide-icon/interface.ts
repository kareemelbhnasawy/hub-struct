import { ThemeColorKey } from '@/theme/theme-colors';
import { RNStyle } from '@/types/themes';
import { icons, LucideProps } from 'lucide-react-native';

interface LucideIconProps extends Omit<LucideProps, 'testID' | 'color'> {
  testId: string;
  name: keyof typeof icons;
  color?: ThemeColorKey;
  size?: number;
  isCircle?: boolean;
  isOutline?: boolean;
  hasWrapper?: boolean;
  isRTLMirrored?: boolean;
  containerStyle?: RNStyle;
  isFlipped?: boolean;
}

export default LucideIconProps;
