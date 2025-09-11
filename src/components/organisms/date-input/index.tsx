import { useCallback, useState } from 'react';
import DateInputProps from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { Pressable } from 'react-native';
import { Paragraph } from '@/components/atoms';
import { InputContainer } from '@/components/molecules';

type InputState =
  | 'default'
  | 'hover'
  | 'pressed'
  | 'focused'
  | 'disabled'
  | 'error';

const DateInput = ({
  labelProps,
  isRequired,
  inputStyle,
  containerStyle,
  testId,
  leadingIconProps,
  style,
  error,
  disabled,
  placeholder,
  placeholderProps,
  size,
  ...props
}: DateInputProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [hovered, setHovered] = useState(false);
  // TODO: focused will be the isVisible from the selector
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
      isRequired={isRequired}
      labelProps={labelProps}
      containerStyle={containerStyle}
      trailingIconProps={{ name: 'CalendarDays' }}
      leadingIconProps={leadingIconProps}
      inputStyle={style}
      state={getState()}
      size={size}
      onPressContainer={() => {
        // TODO: Open Modal
      }}>
      <Pressable
        style={[themedStyles.flexOne, inputStyle]}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        {...props}>
        {placeholder && (
          <Paragraph
            testId=""
            text={placeholder}
            textProps={placeholderProps}
          />
        )}
      </Pressable>
    </InputContainer>
  );
};
export default DateInput;
