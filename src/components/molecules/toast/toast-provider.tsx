// toast/toast-provider.tsx
import React from 'react';
import ToastManager from 'toastify-react-native';
import Toast from './toast';
import type { ToastType } from './interface';

const renderToast = (type: ToastType) => {
  interface ToastRendererProps {
    text1: string;
    text2?: string;
    onPress?: () => void;
    hide?: () => void;
    closeIcon?: boolean;
  }

  const ToastRenderer = (props: ToastRendererProps) => (
    <Toast
      testId={`${type}-toast`}
      type={type}
      message={props.text1}
      // Map *from* supported keys to your component API
      actionLabel={props.text2} // <-- comes from text2
      onActionPress={props.onPress} // <-- comes from onPress
      onClosePress={props.hide} // provided by the lib
      // if you had a close toggle in the component, pass props.showClose
      showClose={props.closeIcon}
    />
  );
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
