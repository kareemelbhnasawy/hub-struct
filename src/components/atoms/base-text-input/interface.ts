import { TextInputProps } from 'react-native';

interface BaseTextInputProps
  extends Omit<TextInputProps, 'testID' | 'onChangeText'> {
  testId: string;
  placeholderProps?: { [x: string]: string };
  onChangeValue?: (arg0: string) => void;
  inBottomSheet?: boolean;
  disabled?: boolean;
}

export default BaseTextInputProps;
