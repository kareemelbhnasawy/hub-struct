import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';
import { RNStyle } from '@/types/themes';

export interface InputContainerProps {
  testId: string;
  required?: boolean;
  labelProps?: Omit<HeadlineProps, 'testId'>;
  containerStyle?: RNStyle;
  inputStyle?: RNStyle;
  leadingIconProps?: Omit<LucideIconProps, 'testId'>;
  trailingIconProps?: Omit<LucideIconProps, 'testId'>;
  onPressContainer?: () => void;
  state?: 'default' | 'hover' | 'pressed' | 'focused' | 'disabled' | 'error';
}
