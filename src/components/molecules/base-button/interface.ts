import { PressableProps } from 'react-native';
import BaseTextProps from '../../atoms/base-text/interface';
import LucideIconProps from '../../atoms/lucide-icon/interface';

type ButtonVariant = 'primary' | 'secondary';

export type ButtonSizes = 'xxl' | 'xl' | 'lg' | 'md' | 'sm';
export type ButtonState =
  | 'default'
  | 'hover'
  | 'focused'
  | 'pressed'
  | 'disabled'
  | 'loading'
  | 'success';

interface BaseButtonProps extends PressableProps {
  testId: string;
  size?: ButtonSizes;
  leftIcon?: Omit<LucideIconProps, 'testId'>;
  rightIcon?: Omit<LucideIconProps, 'testId'>;
  textProps: Omit<BaseTextProps, 'testId'>;
  danger?: boolean;
  disabled?: boolean;
  success?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
}

export default BaseButtonProps;
