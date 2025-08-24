import { ToastType } from './interface';

export const TOAST_ICONS: Record<ToastType, string> = {
  success: 'circle-check-big',
  error: 'circle-x',
  info: 'info',
  warning: 'triangle-alert',
};

export const TOAST_ICON_COLORS: Record<ToastType, string> = {
  success: '#079455',
  error: '#D92D20',
  info: '#1570EF',
  warning: '#DC6803',
};

export const DEFAULT_ACTION_LABEL = 'Action';
export const DEFAULT_ACTION_LABEL_AR = 'اكشن';
