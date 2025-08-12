import { PressableProps } from 'react-native';
import BaseTextProps from '../../atoms/base-text/interface';
import LucideIconProps from '../../atoms/lucide-icon/interface';

type ButtonVariant = 'primary' | 'secondary';

export type ButtonSizes = 'xxl' | 'xl' | 'lg' | 'md' | 'sm';

interface BaseButtonProps extends PressableProps {
  size?: ButtonSizes;
  leftIcon?: LucideIconProps;
  rightIcon?: LucideIconProps;
  textProps: BaseTextProps;
  error?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
}

export default BaseButtonProps;
