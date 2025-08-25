// toast/toast-provider.tsx
import React from 'react';
import ToastManager from 'toastify-react-native';
import Toast from './toast';
import type { ToastProps, ToastType } from './interface';

const renderToast = (type: ToastType) => {
  interface ToastRendererProps {
    props: ToastProps;
  }

  const ToastRenderer = (toastConfig: ToastRendererProps) => {
    return <Toast {...toastConfig.props} />;
  };
  ToastRenderer.displayName = `ToastRenderer_${type}`;
  return ToastRenderer;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const toastConfig = {
    success: renderToast('success'),
    error: renderToast('error'),
    info: renderToast('info'),
    warn: renderToast('warn'), // if your component uses "warning" style
  };

  return (
    <>
      {children}
      <ToastManager config={toastConfig} />
    </>
  );
};
