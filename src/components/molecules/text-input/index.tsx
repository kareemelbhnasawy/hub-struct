import BaseTextInput from '@/components/atoms/base-text-input';
import { useCallback, useRef, useState } from 'react';
import InputContainer from '../input-container';
import TextInputProps from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';

type InputState =
  | 'default'
  | 'hover'
  | 'pressed'
  | 'focused'
  | 'disabled'
  | 'error';

const TextInput = ({
  labelProps,
  required,
  inputStyle,
  containerStyle,
  value,
  testId,
  placeholder,
  placeholderProps,
  onChangeValue,
  leadingIconProps,
  trailingIconProps,
  style,
  error,
  disabled,
  ...props
}: TextInputProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const baseTextRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);

  const getState = useCallback((): InputState => {
    if (disabled) return 'disabled';
    if (error) return 'error';
    if (pressed) return 'pressed';
    if (hovered) return 'hover';
    if (focused) return 'focused';
    return 'default';
  }, [disabled, error, focused, hovered, pressed]);

  return (
    <InputContainer
      testId={testId}
      required={required}
      labelProps={labelProps}
      containerStyle={containerStyle}
      leadingIconProps={leadingIconProps}
      trailingIconProps={trailingIconProps}
      inputStyle={style}
      state={getState()}
      onPressContainer={() => {
        baseTextRef?.current?.focus();
      }}>
      <BaseTextInput
        testId={`${testId}-base`}
        ref={baseTextRef}
        style={[themedStyles.flexOne, inputStyle]}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        placeholder={placeholder}
        placeholderProps={placeholderProps}
        value={value}
        onChangeValue={onChangeValue}
        {...props}
      />
    </InputContainer>
  );
};
export default TextInput;
