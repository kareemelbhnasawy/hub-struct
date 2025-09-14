import SearchTextInputProps from './interface';
import TextInput from '@/components/molecules/text-input';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const SearchInput = ({
  value,
  onChangeValue,
  debounceDelay = 500,
  setSearchLoading,
  ...textInputProps
}: SearchTextInputProps) => {
  const [internalValue, setInternalValue] = useState(value);
  const [debouncedValue] = useDebounce(internalValue, debounceDelay);

  useEffect(() => {
    onChangeValue?.(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    setSearchLoading?.(debouncedValue != internalValue);
  }, [debouncedValue, internalValue]);

  const clearSearchValue = () => {
    setInternalValue('');
  };

  return (
    <TextInput
      size="sm"
      value={internalValue}
      onChangeValue={setInternalValue}
      trailingIconProps={{
        name: value ? 'X' : 'Search',
        onPress: clearSearchValue,
      }}
      {...textInputProps}
    />
  );
};
export default SearchInput;
