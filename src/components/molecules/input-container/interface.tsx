import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import { RNStyle } from '@/types/themes';

export interface InputContainerProps {
  testId: string;
  isRequired?: boolean;
  labelProps?: Omit<HeadlineProps, 'testId'>;
  containerStyle?: RNStyle;
  inputStyle?: RNStyle;
  leadingIconProps?: Omit<LucideIconProps, 'testId'>;
  trailingIconProps?: Omit<LucideIconProps, 'testId'>;
  onPressContainer?: () => void;
  state?: 'default' | 'hover' | 'pressed' | 'focused' | 'disabled' | 'error';
  errorProps?: Omit<ParagraphProps, 'testId'>;
}
