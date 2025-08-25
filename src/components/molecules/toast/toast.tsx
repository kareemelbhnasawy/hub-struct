import React from 'react';
import { View, Pressable } from 'react-native';
import { Paragraph, LucideIcon } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';
import ToastProps from './interface';
import styles from './styles';
import { DEFAULT_ACTION_LABEL, DEFAULT_ACTION_LABEL_AR } from './constants';

// Map toast types to Lucide icons
const TOAST_ICON_MAPPING = {
  success: 'CheckCircle',
  error: 'XCircle',
  info: 'Info',
  warning: 'AlertTriangle',
} as const;

const TOAST_ICON_COLORS = {
  success: '#079455',
  error: '#D92D20',
  info: '#1570EF',
  warning: '#DC6803',
} as const;

const Toast = ({
  testId,
  type,
  message,
  isRTL = false,
  showAction = true,
  showClose = true,
  actionLabel,
  onActionPress,
  onClosePress,
  messageProps,
  actionProps,
  ...viewProps
}: ToastProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const defaultActionLabel = isRTL
    ? DEFAULT_ACTION_LABEL_AR
    : DEFAULT_ACTION_LABEL;
  const finalActionLabel = actionLabel || defaultActionLabel;

  return (
    <View
      testID={`${testId}-toast-container`}
      style={[
        themedStyles.container,
        themedStyles[type],
        isRTL && themedStyles.containerRTL,
      ]}
      {...viewProps}>
      {/* Content area with icon and text */}
      <View style={[themedStyles.content, isRTL && themedStyles.contentRTL]}>
        <LucideIcon
          testId={`${testId}-toast-icon`}
          name={TOAST_ICON_MAPPING[type]}
          color={TOAST_ICON_COLORS[type]}
          size={20}
        />
        <Paragraph
          testId={`${testId}-toast-message`}
          text={message}
          size="md"
          weight="Regular"
          style={[
            themedStyles.messageText,
            isRTL && themedStyles.messageTextRTL,
          ]}
          {...messageProps}
        />
      </View>

      {/* Actions area */}
      {(showAction || showClose) && (
        <View style={[themedStyles.actions, isRTL && themedStyles.actionsRTL]}>
          {showAction && (
            <Pressable
              testID={`${testId}-toast-action`}
              style={themedStyles.actionButton}
              onPress={onActionPress}>
              <Paragraph
                testId={`${testId}-toast-action-text`}
                text={finalActionLabel}
                size="sm"
                weight="SemiBold"
                style={themedStyles.actionText}
                {...actionProps}
              />
            </Pressable>
          )}

          {showClose && (
            <Pressable
              testID={`${testId}-toast-close`}
              style={themedStyles.closeButton}
              onPress={onClosePress}>
              <LucideIcon
                testId={`${testId}-toast-close-icon`}
                name="X"
                color="#111927"
                size={24}
              />
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default Toast;
