import React from 'react';
import { View, Pressable } from 'react-native';
import { Paragraph } from '@/components/atoms';
import { LucideIcon } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';
import ToastProps from './interface';
import styles from './styles';

const Toast = ({
  testId,
  variant,
  title,
  message,
  actionLabel,
  onActionPress,
  onClose,
  showClose = true,
  showAction = true,
  isRTL = false,
  style,
  ...props
}: ToastProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  // Get icon name based on variant
  const getIconName = () => {
    switch (variant) {
      case 'success':
        return 'CircleCheck';
      case 'error':
        return 'CircleX';
      case 'info':
        return 'Info';
      case 'warning':
        return 'TriangleAlert';
      default:
        return 'Info';
    }
  };

  // Get variant-specific styles
  const getVariantStyles = () => ({
    container: themedStyles[variant],
    icon: themedStyles[`${variant}Icon`],
    title: themedStyles[`${variant}Title`],
    message: themedStyles[`${variant}Message`],
    action: themedStyles[`${variant}Action`],
    actionText: themedStyles[`${variant}ActionText`],
  });

  const variantStyles = getVariantStyles();

  return (
    <View
      testID={`${testId}-toast-container`}
      style={[
        themedStyles.container,
        variantStyles.container,
        isRTL && themedStyles.containerRTL,
        style,
      ]}
      {...props}
    >
      {/* Icon */}
      <View style={themedStyles.iconContainer}>
        <LucideIcon
          testId={`${testId}-toast-icon`}
          name={getIconName()}
          size={20}
          color={variantStyles.icon.color}
        />
      </View>

      {/* Content */}
      <View
        style={[
          themedStyles.contentContainer,
          isRTL && themedStyles.contentContainerRTL,
        ]}
      >
        {title && (
          <Paragraph
            testId={`${testId}-toast-title`}
            size="md"
            weight="SemiBold"
            style={[themedStyles.title, variantStyles.title]}
          >
            {title}
          </Paragraph>
        )}
        <Paragraph
          testId={`${testId}-toast-message`}
          size="sm"
          weight="Regular"
          style={[themedStyles.message, variantStyles.message]}
        >
          {message}
        </Paragraph>
      </View>

      {/* Actions */}
      <View
        style={[
          themedStyles.actionsContainer,
          isRTL && themedStyles.actionsContainerRTL,
        ]}
      >
        {/* Action Button */}
        {showAction && actionLabel && onActionPress && (
          <Pressable
            testID={`${testId}-toast-action`}
            style={[themedStyles.actionButton, variantStyles.action]}
            onPress={onActionPress}
          >
            <Paragraph
              testId={`${testId}-toast-action-text`}
              size="sm"
              weight="SemiBold"
              style={[themedStyles.actionText, variantStyles.actionText]}
            >
              {actionLabel}
            </Paragraph>
          </Pressable>
        )}

        {/* Close Button */}
        {showClose && onClose && (
          <Pressable
            testID={`${testId}-toast-close`}
            style={themedStyles.closeButton}
            onPress={onClose}
          >
            <LucideIcon
              testId={`${testId}-toast-close-icon`}
              name="X"
              size={24}
              color={themedStyles.closeIcon.color}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Toast;
