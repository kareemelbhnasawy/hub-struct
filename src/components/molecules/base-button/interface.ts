import { PressableProps } from 'react-native';
import BaseTextProps from '../../atoms/base-text/interface';
import LucideIconProps from '../../atoms/lucide-icon/interface';

type ButtonVariant = 'primary' | 'secondary';

interface BaseButtonProps extends PressableProps {
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm';
  leftIcon?: LucideIconProps;
  rightIcon?: LucideIconProps;
  textProps: BaseTextProps;
  error?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
}

export default BaseButtonProps;
