import { View, Pressable } from 'react-native';
import { Paragraph, LucideIcon } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';
import ToastProps from './interface';
import styles from './styles';
import { icons } from 'lucide-react-native';
import ToastManager from 'toastify-react-native/components/ToastManager';

// Map toast types to Lucide icons
const TOAST_ICON_MAPPING: Record<string, keyof typeof icons> = {
  success: 'CircleCheck',
  error: 'CircleX',
  info: 'Info',
  warn: 'TriangleAlert',
};

const Toast = ({
  testId,
  type,
  showClose = true,
  onActionPress,
  onClosePress,
  messageProps,
  actionProps,
  iconProps,
  ...viewProps
}: ToastProps) => {
  const { getThemedStyles } = useThemeStore();
  const TOAST_ICON_COLORS = {
    success: 'backgroundSuccess',
    error: 'backgroundError',
    info: 'backgroundInfo',
    warn: 'backgroundWarning',
  } as const;
  const themedStyles = getThemedStyles(styles);

  const handleClose = () => {
    ToastManager.hide();
    onClosePress?.();
  };

  return (
    <View
      testID={`${testId}-toast-container`}
      style={[themedStyles.container, themedStyles[type]]}
      {...viewProps}>
      {/* Content area with icon and text */}
      <View style={themedStyles.content}>
        <LucideIcon
          testId={`${testId}-toast-icon`}
          name={TOAST_ICON_MAPPING[type]}
          color={TOAST_ICON_COLORS[type]}
          size={20}
          {...iconProps}
        />
        <Paragraph
          testId={`${testId}-toast-message`}
          size="xl"
          weight="Medium"
          style={themedStyles.messageText}
          {...messageProps}
        />
      </View>

      {/* Actions area */}
      {(onActionPress || showClose) && (
        <View style={themedStyles.actions}>
          {onActionPress && actionProps && (
            <Pressable
              testID={`${testId}-toast-action`}
              style={themedStyles.actionButton}
              onPress={onActionPress}>
              <Paragraph
                testId={`${testId}-toast-action-text`}
                size="sm"
                weight="Semibold"
                style={themedStyles.actionText}
                {...actionProps}
              />
            </Pressable>
          )}

          {showClose && (
            <Pressable
              testID={`${testId}-toast-close`}
              style={themedStyles.closeButton}
              onPress={handleClose}>
              <LucideIcon
                testId={`${testId}-toast-close-icon`}
                name="X"
                color={'textDefault'}
                size={20}
              />
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default Toast;
