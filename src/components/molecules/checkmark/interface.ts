import HeadlineProps from '@/components/atoms/typography/headline/interface';
import { RNStyle } from '@/types/themes';

export interface CheckmarkProps {
  testId: string;
  hasText?: boolean;
  textProps?: Omit<HeadlineProps, 'testId'>;
  disabled?: boolean;
  containerStyle?: RNStyle;
  onCheck?: () => void;
  onUncheck?: () => void;
  checked?: boolean;
}
