import TextInputProps from '@/components/molecules/text-input/interface';

interface SearchTextInputProps
  extends Omit<TextInputProps, 'trailingIconProps'> {
  // TODO: Add debounce props
  debounceDelay?: number;
  setSearchLoading?: (arg0: boolean) => void;
}

export default SearchTextInputProps;
