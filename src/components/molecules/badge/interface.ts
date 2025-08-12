import BaseTextProps from '../../atoms/base-text/interface';

export type BadgeVariant = 'number' | 'label';
export type BadgeColor = 'brand' | 'success' | 'warning' | 'gray' | 'error';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps extends Omit<BaseTextProps, 'text'> {
  testId: string;
  variant: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  rtl?: boolean;
  text: string;
}

export default BadgeProps;
