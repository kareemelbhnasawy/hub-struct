import { ViewProps } from 'react-native';
import BaseTextProps from '../../atoms/base-text/interface';

export type BadgeVariant = 'number' | 'label';
export type BadgeColor = 'brand' | 'success' | 'warning' | 'gray' | 'error';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps extends Omit<ViewProps, 'style'>, Omit<BaseTextProps, 'text' | 'style'> {
  testId: string;
  variant: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  rtl?: boolean;
  text: string;
  style?: ViewProps['style'];
}

export default BadgeProps;
