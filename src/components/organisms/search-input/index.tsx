import SearchTextInputProps from './interface';
import TextInput from '@/components/molecules/text-input';

const SearchTextInput = ({ ...textInputProps }: SearchTextInputProps) => {
  // TODO: Add debounce logic here
  return (
    <TextInput trailingIconProps={{ name: 'Search' }} {...textInputProps} />
  );
};
export default SearchTextInput;
