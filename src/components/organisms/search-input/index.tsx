import SearchTextInputProps from './interface';
import TextInput from '@/components/molecules/text-input';

const SearchInput = ({ ...textInputProps }: SearchTextInputProps) => {
  // TODO: Add debounce logic here
  return (
    <TextInput
      size="sm"
      trailingIconProps={{ name: 'Search' }}
      {...textInputProps}
    />
  );
};
export default SearchInput;
