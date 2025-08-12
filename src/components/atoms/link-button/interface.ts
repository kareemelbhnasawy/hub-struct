import { PressableProps } from 'react-native';
import BaseTextProps from '../base-text/interface';
import LucideIconProps from '../lucide-icon/interface';

type LinkButtonVariant = 'link';

interface LinkButtonProps extends PressableProps {
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm';
  leftIcon?: LucideIconProps;
  rightIcon?: LucideIconProps;
  textProps: BaseTextProps;
  error?: boolean;
  loading?: boolean;
  variant?: LinkButtonVariant;
}

export default LinkButtonProps;
