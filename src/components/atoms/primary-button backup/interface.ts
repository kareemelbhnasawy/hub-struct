import { PressableProps } from 'react-native';
import BaseTextProps from '../base-text/interface';
import LucideIconProps from '../lucide-icon/interface';

interface PrimaryButtonProps extends PressableProps {
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm';
  leftIcon?: LucideIconProps;
  rightIcon?: LucideIconProps;
  textProps: BaseTextProps;
  error?: boolean;
  loading?: boolean;
}

export default PrimaryButtonProps;
