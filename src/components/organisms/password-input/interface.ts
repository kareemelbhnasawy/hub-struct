import TextInputProps from '@/components/molecules/text-input/interface';

interface PasswordInputProps
  extends Omit<TextInputProps, 'trailingIconProps' | 'secureTextEntry'> {
  defaultSecureTextEntry?: boolean;
}

export default PasswordInputProps;
