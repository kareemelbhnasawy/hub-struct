import { useState } from 'react';
import LinkButtonProps, { LinkButtonState } from './interface';
import {
  GestureResponderEvent,
  NativeMouseEvent,
  NativeSyntheticEvent,
  TargetedEvent,
} from 'react-native';
import { getTextType } from './utils';
import { getTextSize } from './utils';

const useLinkButton = ({
  size,
  disabled,
  onHoverIn,
  onHoverOut,
  onFocus,
  onBlur,
  onPressIn,
  onPressOut,
}: LinkButtonProps) => {
  const textType = getTextType(size);
  const textSize = getTextSize(size);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);

  const getState = (): LinkButtonState => {
    switch (true) {
      case disabled:
        return 'disabled';
      case pressed:
        return 'pressed';
      case hovered:
        return 'hover';
      case focused:
        return 'focused';
      default:
        return 'default';
    }
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
    state,
    onHoverIn: onHoverInFn,
    onHoverOut: onHoverOutFn,
    onFocus: onFocusFn,
    onBlur: onBlurFn,
    onPressIn: onPressInFn,
    onPressOut: onPressOutFn,
    textSize: textSize,
    textType: textType,
  };
};

export default useLinkButton;
