import { RNStyle } from '@/types/themes';
import { icons, LucideProps } from 'lucide-react-native';
import { themeColors } from '@/theme/theme-colors'; // <-- update path if needed

interface LucideIconProps extends Omit<LucideProps, 'testID'> {
  testId: string;
  name: keyof typeof icons;
  color?: string;
  bgColor?: keyof typeof themeColors;
  size?: number;
  isCircle?: boolean;
  isOutline?: boolean;
  hasWrapper?: boolean;
  isRTLMirrored?: boolean;
  containerStyle?: RNStyle;
}

export default LucideIconProps;
