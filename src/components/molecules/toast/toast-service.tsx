// toast/toast-service.ts
import { Toast } from 'toastify-react-native';

type ShowOpts = {
  type: 'success' | 'error' | 'info' | 'warn' | 'default';
  message: string;
  duration?: number;
  position?: 'top' | 'center' | 'bottom';
  // your custom API:
  actionLabel?: string;
  onActionPress?: () => void;
  showClose?: boolean; // <-- supported name
};

const baseShow = ({
  type,
  message,
  duration,
  position,
  actionLabel,
  onActionPress,
  showClose = true,
}: ShowOpts) => {
  Toast.show({
    type,
    // Map to supported keys
    text1: message,
    text2: actionLabel, // <-- becomes your action label
    onPress: onActionPress, // <-- becomes your action handler
    visibilityTime: duration ?? 3000,
    position,
    closeIcon: showClose, // <-- supported prop name
  });
};

export const ToastService = {
  show: baseShow,
  success: (o: Omit<ShowOpts, 'type'>) => baseShow({ ...o, type: 'success' }),
  error: (o: Omit<ShowOpts, 'type'>) => baseShow({ ...o, type: 'error' }),
  info: (o: Omit<ShowOpts, 'type'>) => baseShow({ ...o, type: 'info' }),
  warn: (o: Omit<ShowOpts, 'type'>) => baseShow({ ...o, type: 'warn' }),
};
