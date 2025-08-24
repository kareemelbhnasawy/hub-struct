import React from 'react';
import { View } from 'react-native';
import ToastManager, { Toast as ToastifyToast } from 'toastify-react-native';
import Toast from './index';
import { ToastType } from './interface';

interface ToastConfig {
  type: ToastType;
  message: string;
  isRTL?: boolean;
  showAction?: boolean;
  showClose?: boolean;
  actionLabel?: string;
  onActionPress?: () => void;
  duration?: number;
}

class ToastService {
  private static generateId() {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  static show(config: ToastConfig) {
    const toastId = this.generateId();
    
    ToastifyToast.show({
      data: {
        title: config.message,
        color: 'white',
      },
      autoHide: true,
      duration: config.duration || 3000,
      render: (toastOptions) => (
        <View style={{ marginHorizontal: 16, marginVertical: 8 }}>
          <Toast
            testId={toastId}
            type={config.type}
            message={config.message}
            isRTL={config.isRTL}
            showAction={config.showAction}
            showClose={config.showClose}
            actionLabel={config.actionLabel}
            onActionPress={config.onActionPress}
            onClosePress={() => {
              ToastifyToast.hide(toastOptions.id);
            }}
          />
        </View>
      ),
    });
  }

  static success(message: string, options?: Partial<ToastConfig>) {
    this.show({
      type: 'success',
      message,
      ...options,
    });
  }

  static error(message: string, options?: Partial<ToastConfig>) {
    this.show({
      type: 'error',
      message,
      ...options,
    });
  }

  static info(message: string, options?: Partial<ToastConfig>) {
    this.show({
      type: 'info',
      message,
      ...options,
    });
  }

  static warning(message: string, options?: Partial<ToastConfig>) {
    this.show({
      type: 'warning',
      message,
      ...options,
    });
  }

  static hide() {
    ToastifyToast.hideAll();
  }
}

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <ToastManager />
    </>
  );
};

export { ToastService, ToastProvider };
export default Toast;
