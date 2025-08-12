import { useState } from 'react';
import BaseButtonProps from './interface';
import { getTextSize, getTextType } from './utils';
import {
  NativeSyntheticEvent,
  NativeMouseEvent,
  TargetedEvent,
  GestureResponderEvent,
} from 'react-native';

type ButtonState =
  | 'default'
  | 'hover'
  | 'focused'
  | 'pressed'
  | 'disabled'
  | 'loading'
  | 'error';

const useBaseButton = ({
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
}: BaseButtonProps) => {
  const textType = getTextType(size);
  const textSize = getTextSize(size);

  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);

  const getState = (): ButtonState => {
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
  return {
    textType,
    textSize,
    onHoverInFn,
    onHoverOutFn,
    onFocusFn,
    onBlurFn,
    onPressInFn,
    onPressOutFn,
    state,
  };
};

export default useBaseButton;
