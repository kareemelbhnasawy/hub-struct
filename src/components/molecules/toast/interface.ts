import { ViewProps } from 'react-native';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';

export type ToastType = 'success' | 'error' | 'info' | 'warn';

export interface ToastProps extends Omit<ViewProps, 'style' | 'testID'> {
  testId: string;
  type: ToastType;
  showClose?: boolean;
  onActionPress?: () => void;
  onClosePress?: () => void;
  messageProps: Omit<ParagraphProps, 'testId'>;
  actionProps?: Omit<ParagraphProps, 'testId'>;
}

export default ToastProps;
