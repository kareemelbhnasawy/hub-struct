import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  NativeSyntheticEvent,
  NativeMouseEvent,
  TargetedEvent,
  GestureResponderEvent,
  View,
} from 'react-native';
import LinkButtonProps from './interface';
import { styles } from './style';
import { getThemeColor } from '@/theme/theme-colors';
import Paragraph from '../../atoms/typography/paragraph';
import LucideIcon from '../../atoms/lucide-icon';

type LinkButtonState =
  | 'default'
  | 'hover'
  | 'focused'
  | 'pressed'
  | 'disabled'
  | 'loading'
  | 'error';

const LinkButton = ({
  textProps,
  size = 'md',
  disabled,
  loading,
  error,
  onHoverIn,
  onHoverOut,
  onFocus,
  onBlur,
  onPressIn,
  onPressOut,
  variant = 'link',
  isOutline = false,
  ...props
}: LinkButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);

  const getState = (): LinkButtonState => {
    if (disabled) return 'disabled';
    if (loading) return 'loading';
    if (error) return 'error';
    if (pressed) return 'pressed';
    if (hovered) return 'hover';
    if (focused) return 'focused';
    return 'default';
  };

  const onHoverInFn = (e: NativeSyntheticEvent<NativeMouseEvent>) => {
    setHovered(true);
    if (onHoverIn) onHoverIn(e);
  };

  const onHoverOutFn = (e: NativeSyntheticEvent<NativeMouseEvent>) => {
    setHovered(false);
    if (onHoverOut) onHoverOut(e);
  };

  const onFocusFn = (e: NativeSyntheticEvent<TargetedEvent>) => {
    setFocused(true);
    if (onFocus) onFocus(e);
  };

  const onBlurFn = (e: NativeSyntheticEvent<TargetedEvent>) => {
    setFocused(false);
    if (onBlur) onBlur(e);
  };

  const onPressInFn = (e: GestureResponderEvent) => {
    setPressed(true);
    if (onPressIn) onPressIn(e);
  };

  const onPressOutFn = (e: GestureResponderEvent) => {
    setPressed(false);
    if (onPressOut) onPressOut(e);
  };

  const state = getState();
  return (
    <Pressable
      disabled={disabled || loading}
      onHoverIn={onHoverInFn}
      onHoverOut={onHoverOutFn}
      onFocus={onFocusFn}
      onBlur={onBlurFn}
      onPressIn={onPressInFn}
      onPressOut={onPressOutFn}
      style={[
        styles.base.button,
        styles[variant][state].wrapper,
        styles.base[size],
      ]}
      {...props}>
      {loading ? (
        <ActivityIndicator color={getThemeColor('alphaWhite40')} />
      ) : (
        <>
          {isOutline ? (
            <View style={styles.outline}>
              <Paragraph
                weight="Medium"
                size={size === 'xxl' ? 'xl' : size === 'xl' ? 'lg' : 'sm'}
                style={styles[variant][state].text}
                {...textProps}
              />
            </View>
          ) : (
            <Paragraph
              weight="Medium"
              size={size === 'xxl' ? 'xl' : size === 'xl' ? 'lg' : 'sm'}
              style={styles[variant][state].text}
              {...textProps}
            />
          )}
        </>
      )}
    </Pressable>
  );
};

export default LinkButton;
