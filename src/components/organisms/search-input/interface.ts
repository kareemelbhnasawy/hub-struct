import TextInputProps from '@/components/molecules/text-input/interface';

interface SearchTextInputProps
  extends Omit<TextInputProps, 'trailingIconProps'> {
  // TODO: Add debounce props
  debounceDelay?: number;
  onClearButtonPress?: () => void;
}

export default SearchTextInputProps;
