import React from 'react';
import ToastManager, { Toast as ToastifyToast } from 'toastify-react-native';
import Toast from './toast';
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

// Simple toast components that work with toastify's expected props
const SuccessToast = ({ text1, text2, onHide }: any) => {
  const message = text1 || text2 || 'Success';
  return (
    <Toast
      testId="success-toast"
      type="success"
      message={message}
      onClosePress={onHide}
      showAction={true}
      showClose={true}
    />
  );
};

const ErrorToast = ({ text1, text2, onHide }: any) => {
  const message = text1 || text2 || 'Error';
  return (
    <Toast
      testId="error-toast"
      type="error"
      message={message}
      onClosePress={onHide}
      showAction={true}
      showClose={true}
    />
  );
};

const InfoToast = ({ text1, text2, onHide }: any) => {
  const message = text1 || text2 || 'Info';
  return (
    <Toast
      testId="info-toast"
      type="info"
      message={message}
      onClosePress={onHide}
      showAction={true}
      showClose={true}
    />
  );
};

const WarningToast = ({ text1, text2, onHide }: any) => {
  const message = text1 || text2 || 'Warning';
  return (
    <Toast
      testId="warning-toast"
      type="warning"
      message={message}
      onClosePress={onHide}
      showAction={true}
      showClose={true}
    />
  );
};

class ToastService {
  static show(config: ToastConfig) {
    const toastOptions = {
      duration: config.duration || 3000,
    };

    switch (config.type) {
      case 'success':
        ToastifyToast.success(config.message, toastOptions);
        break;
      case 'error':
        ToastifyToast.error(config.message, toastOptions);
        break;
      case 'info':
        ToastifyToast.info(config.message, toastOptions);
        break;
      case 'warning':
        ToastifyToast.warn(config.message, toastOptions);
        break;
    }
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

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const toastConfig = {
    success: SuccessToast,
    error: ErrorToast,
    info: InfoToast,
    warn: WarningToast,
  };

  return (
    <>
      {children}
      <ToastManager config={toastConfig} />
    </>
  );
};

export { ToastService, ToastProvider };
export default Toast;
