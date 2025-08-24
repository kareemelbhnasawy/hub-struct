import { ViewProps, ViewStyle } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

export type ToastVariant = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps extends Omit<ViewProps, 'style' | 'testID'> {
  testId: string;
  variant: ToastVariant;
  title?: string;
  message: string;
  actionLabel?: string;
  onActionPress?: () => void;
  onClose?: () => void;
  showClose?: boolean;
  showAction?: boolean;
  isRTL?: boolean;
  style?: ViewStyle;
}

export interface ToastConfigOptions {
  variant: ToastVariant;
  title?: string;
  message: string;
  actionLabel?: string;
  onActionPress?: () => void;
  showClose?: boolean;
  showAction?: boolean;
  duration?: number;
  position?: 'top' | 'bottom' | 'center';
}

export interface ToastManagerRef {
  show: (options: ToastConfigOptions) => void;
  hide: () => void;
  success: (message: string, options?: Partial<ToastConfigOptions>) => void;
  error: (message: string, options?: Partial<ToastConfigOptions>) => void;
  info: (message: string, options?: Partial<ToastConfigOptions>) => void;
  warning: (message: string, options?: Partial<ToastConfigOptions>) => void;
}

export default ToastProps;
