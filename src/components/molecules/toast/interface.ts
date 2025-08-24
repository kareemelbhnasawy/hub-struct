import { ViewProps } from 'react-native';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps extends Omit<ViewProps, 'style' | 'testID'> {
  testId: string;
  type: ToastType;
  message: string;
  isRTL?: boolean;
  showAction?: boolean;
  showClose?: boolean;
  actionLabel?: string;
  onActionPress?: () => void;
  onClosePress?: () => void;
  messageProps?: Omit<ParagraphProps, 'testId' | 'text'>;
  actionProps?: Omit<ParagraphProps, 'testId' | 'text'>;
}

export default ToastProps;
