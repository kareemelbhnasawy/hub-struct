import { InputContainerProps } from '../input-container/interface';
import BaseTextInputProps from '@/components/atoms/base-text-input/interface';
import { RNStyle } from '@/types/themes';

interface TextInputProps extends BaseTextInputProps, InputContainerProps {
  style?: RNStyle;
  error?: boolean;
  disabled?: boolean;
}

export default TextInputProps;
