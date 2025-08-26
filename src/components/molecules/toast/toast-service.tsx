import { Toast } from 'toastify-react-native';
import ToastProps from './interface';

type ShowOpts = {
  type: 'success' | 'error' | 'info' | 'warn' | 'default';
  duration?: number;
  position?: 'top' | 'center' | 'bottom';
  props: Omit<ToastProps, 'type'>;
};

const baseShow = ({ type, duration, position, props }: ShowOpts) => {
  Toast.show({
    type,
    visibilityTime: duration ?? 3000,
    position,
    props,
  });
};

export const ToastService = {
  show: baseShow,
  success: (o: Omit<ShowOpts, 'type'>) => baseShow({ ...o, type: 'success' }),
  error: (o: Omit<ShowOpts, 'type'>) => baseShow({ ...o, type: 'error' }),
  info: (o: Omit<ShowOpts, 'type'>) => baseShow({ ...o, type: 'info' }),
  warn: (o: Omit<ShowOpts, 'type'>) => baseShow({ ...o, type: 'warn' }),
};
