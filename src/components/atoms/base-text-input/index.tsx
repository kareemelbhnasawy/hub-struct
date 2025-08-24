import { forwardRef } from 'react';
import { TextInput } from 'react-native';
import BaseTextInputProps from './interface';
import { useTranslate } from '@/hooks';

// using forward ref to use it in the pin code so i can focus and blur next and previous inputs
// eslint-disable-next-line react/display-name
const BaseTextInput = forwardRef(
  (
    {
      testId,
      placeholder,
      placeholderProps,
      onChangeValue,
      ...textInputProps
    }: BaseTextInputProps,
    ref,
  ) => {
    const { translate, isRTL } = useTranslate();
    return (
      <TextInput
        ref={ref}
        testID={`${testId}-base-input`}
        textAlign={isRTL ? 'right' : 'left'}
        onChangeText={onChangeValue}
        {...textInputProps}
        placeholder={
          placeholder ? translate(placeholder, placeholderProps) : null
        }
      />
    );
  },
);

export default BaseTextInput;
