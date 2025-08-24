import React, { createContext, useContext, ReactNode, useRef } from 'react';
import { ToastProvider as ToastifyProvider, useToast } from 'toastify-react-native';
import Toast from './index';
import { ToastConfigOptions, ToastManagerRef, ToastVariant } from './interface';

interface ToastContextType {
  show: (options: ToastConfigOptions) => void;
  hide: () => void;
  success: (message: string, options?: Partial<ToastConfigOptions>) => void;
  error: (message: string, options?: Partial<ToastConfigOptions>) => void;
  info: (message: string, options?: Partial<ToastConfigOptions>) => void;
  warning: (message: string, options?: Partial<ToastConfigOptions>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProviderContent = ({ children }: ToastProviderProps) => {
  const toast = useToast();
  const toastIdRef = useRef<string | null>(null);

  const showCustomToast = (options: ToastConfigOptions) => {
    const {
      variant,
      title,
      message,
      actionLabel,
      onActionPress,
      showClose = true,
      showAction = true,
      duration = 4000,
      position = 'top',
    } = options;

    // Hide current toast if any
    if (toastIdRef.current) {
      toast.hide(toastIdRef.current);
    }

    const toastId = toast.show({
      placement: position,
      duration,
      render: ({ id }) => (
        <Toast
          testId="app-toast"
          variant={variant}
          title={title}
          message={message}
          actionLabel={actionLabel}
          onActionPress={() => {
            onActionPress?.();
            toast.hide(id);
          }}
          onClose={() => toast.hide(id)}
          showClose={showClose}
          showAction={showAction}
        />
      ),
    });

    toastIdRef.current = toastId;
  };

  const hideToast = () => {
    if (toastIdRef.current) {
      toast.hide(toastIdRef.current);
      toastIdRef.current = null;
    }
  };

  const createVariantMethod = (variant: ToastVariant) => (
    message: string,
    options: Partial<ToastConfigOptions> = {}
  ) => {
    showCustomToast({
      variant,
      message,
      ...options,
    });
  };

  const contextValue: ToastContextType = {
    show: showCustomToast,
    hide: hideToast,
    success: createVariantMethod('success'),
    error: createVariantMethod('error'),
    info: createVariantMethod('info'),
    warning: createVariantMethod('warning'),
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <ToastifyProvider>
      <ToastProviderContent>{children}</ToastProviderContent>
    </ToastifyProvider>
  );
};

export const useAppToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useAppToast must be used within a ToastProvider');
  }
  return context;
};
