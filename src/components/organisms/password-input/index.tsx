import { useState } from 'react';
import SearchTextInputProps from './interface';
import { TextInput } from '@/components/molecules';

const PasswordInput = ({
  defaultSecureTextEntry = true,
  ...textInputProps
}: SearchTextInputProps) => {
  const [secureText, setSecureText] = useState(defaultSecureTextEntry);
  return (
    <TextInput
      {...textInputProps}
      trailingIconProps={{
        name: secureText ? 'Eye' : 'EyeOff',
        onPress: () => setSecureText((prevState) => !prevState),
      }}
      secureTextEntry={secureText}
    />
  );
};
export default PasswordInput;
