import { ViewProps, ViewStyle } from 'react-native';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import LucideIconProps from '@/components/atoms/lucide-icon/interface';

export type BadgeVariant = 'number' | 'label';
export type BadgeColor = 'brand' | 'success' | 'warning' | 'gray' | 'error' | 'warning-outline';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps extends Omit<ViewProps, 'style' | 'testID'> {
  testId: string;
  iconProps?: Omit<LucideIconProps, 'testId'>;
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  paragraphProps: Omit<ParagraphProps, 'testId'>;
  style?: ViewStyle;
}

export default BadgeProps;
