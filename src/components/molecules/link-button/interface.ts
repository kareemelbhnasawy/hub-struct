import { PressableProps } from 'react-native';
import BaseTextProps from '../../atoms/base-text/interface';
import LucideIconProps from '../../atoms/lucide-icon/interface';

type LinkButtonVariant = 'link';

export type LinkButtonSizes = 'xxl' | 'xl' | 'lg' | 'md' | 'sm';

export type LinkButtonState =
  | 'default'
  | 'hover'
  | 'focused'
  | 'pressed'
  | 'disabled';


interface LinkButtonProps extends PressableProps {
  testId: string,
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm';
  leftIcon?: LucideIconProps;
  rightIcon?: LucideIconProps;
  textProps: BaseTextProps;
  error?: boolean;
  loading?: boolean;
  variant?: LinkButtonVariant;
  isOutline?: boolean;
}

export default LinkButtonProps;
