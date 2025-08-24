import React from 'react';
import { View, Pressable } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { Paragraph } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';
import ToastProps from './interface';
import styles from './styles';
import { TOAST_ICON_COLORS, DEFAULT_ACTION_LABEL, DEFAULT_ACTION_LABEL_AR } from './constants';

const ToastIcon = ({ type }: { type: 'success' | 'error' | 'info' | 'warning' }) => {
  const iconColor = TOAST_ICON_COLORS[type];

  switch (type) {
    case 'success':
      return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <G clipPath="url(#clip0_success)">
            <Path
              d="M18.3334 9.2333V9.99997C18.3324 11.797 17.7505 13.5455 16.6745 14.9848C15.5986 16.4241 14.0862 17.477 12.3629 17.9866C10.6396 18.4961 8.7978 18.4349 7.11214 17.8121C5.42648 17.1894 3.98729 16.0384 3.00922 14.5309C2.03114 13.0233 1.56657 11.24 1.68481 9.4469C1.80305 7.65377 2.49775 5.94691 3.66531 4.58086C4.83288 3.21482 6.41074 2.26279 8.16357 1.86676C9.91641 1.47073 11.7503 1.65192 13.3918 2.3833M7.50009 9.16664L10.0001 11.6666L18.3334 3.3333"
              stroke={iconColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_success">
              <Rect width="20" height="20" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );

    case 'error':
      return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <G clipPath="url(#clip0_error)">
            <Path
              d="M12.5001 7.49996L7.50008 12.5M7.50008 7.49996L12.5001 12.5M18.3334 9.99996C18.3334 14.6023 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39759 5.39771 1.66663 10.0001 1.66663C14.6025 1.66663 18.3334 5.39759 18.3334 9.99996Z"
              stroke={iconColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_error">
              <Rect width="20" height="20" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );

    case 'info':
      return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <G clipPath="url(#clip0_info)">
            <Path
              d="M10.0001 13.3333V9.99996M10.0001 6.66663H10.0084M18.3334 9.99996C18.3334 14.6023 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39759 5.39771 1.66663 10.0001 1.66663C14.6025 1.66663 18.3334 5.39759 18.3334 9.99996Z"
              stroke={iconColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_info">
              <Rect width="20" height="20" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );

    case 'warning':
      return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <Path
            d="M10.0004 7.50023V10.8336M10.0004 14.1669H10.0088M18.1088 15.0002L11.4421 3.33356C11.2967 3.07706 11.0859 2.86372 10.8312 2.71529C10.5765 2.56685 10.2869 2.48865 9.9921 2.48865C9.69727 2.48865 9.40773 2.56685 9.15299 2.71529C8.89826 2.86372 8.68746 3.07706 8.5421 3.33356L1.87543 15.0002C1.7285 15.2547 1.65145 15.5435 1.6521 15.8373C1.65275 16.1312 1.73108 16.4196 1.87913 16.6734C2.02719 16.9272 2.23972 17.1374 2.49518 17.2826C2.75063 17.4278 3.03994 17.5029 3.33376 17.5002H16.6671C16.9595 17.4999 17.2467 17.4227 17.4998 17.2763C17.753 17.1299 17.9631 16.9195 18.1092 16.6662C18.2553 16.4128 18.3321 16.1256 18.3321 15.8331C18.332 15.5407 18.255 15.2535 18.1088 15.0002Z"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    default:
      return null;
  }
};

const CloseIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 6L6 18M6 6L18 18"
      stroke="#111927"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

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

  const defaultActionLabel = isRTL ? DEFAULT_ACTION_LABEL_AR : DEFAULT_ACTION_LABEL;
  const finalActionLabel = actionLabel || defaultActionLabel;

  return (
    <View
      testID={`${testId}-toast-container`}
      style={[
        themedStyles.container,
        themedStyles[type],
        isRTL && themedStyles.containerRTL,
      ]}
      {...viewProps}
    >
      {/* Content area with icon and text */}
      <View
        style={[
          themedStyles.content,
          isRTL && themedStyles.contentRTL,
        ]}
      >
        <ToastIcon type={type} />
        <Paragraph
          testId={`${testId}-toast-message`}
          size="md"
          weight="Regular"
          style={[
            themedStyles.messageText,
            isRTL && themedStyles.messageTextRTL,
          ]}
          {...messageProps}
        >
          {message}
        </Paragraph>
      </View>

      {/* Actions area */}
      {(showAction || showClose) && (
        <View
          style={[
            themedStyles.actions,
            isRTL && themedStyles.actionsRTL,
          ]}
        >
          {showAction && (
            <Pressable
              testID={`${testId}-toast-action`}
              style={themedStyles.actionButton}
              onPress={onActionPress}
            >
              <Paragraph
                testId={`${testId}-toast-action-text`}
                size="sm"
                weight="SemiBold"
                style={themedStyles.actionText}
                {...actionProps}
              >
                {finalActionLabel}
              </Paragraph>
            </Pressable>
          )}

          {showClose && (
            <Pressable
              testID={`${testId}-toast-close`}
              style={themedStyles.closeButton}
              onPress={onClosePress}
            >
              <CloseIcon />
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default Toast;
