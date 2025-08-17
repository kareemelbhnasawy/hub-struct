import { ViewProps, ViewStyle } from 'react-native';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';

export type BadgeVariant = 'number' | 'label';
export type BadgeColor = 'brand' | 'success' | 'warning' | 'gray' | 'error';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps
  extends Omit<ViewProps, 'style' | 'testID'> {
  testId: string;
  variant: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  paragraphProps: Omit<ParagraphProps, 'testId'>;
  style?: ViewStyle;
}

export default BadgeProps;
