import { icons, LucideProps } from 'lucide-react-native';

interface LucideIconProps extends Omit<LucideProps, 'testID'> {
  testId: string;
  name: keyof typeof icons;
  color?: string;
  size?: number;
  isCircle?: boolean;
  isOutline?: boolean;
  hasWrapper?: boolean;
}

export default LucideIconProps;
