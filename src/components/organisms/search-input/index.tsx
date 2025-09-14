import { useEffect, useState } from 'react';
import SearchTextInputProps from './interface';
import TextInput from '@/components/molecules/text-input';
import LucideIconProps from '@/components/atoms/lucide-icon/interface';

const SearchInput = ({
  onClearButtonPress,
  ...textInputProps
}: SearchTextInputProps) => {
  // TODO: Add debounce logic here

  const [iconData, setIconData] = useState<Omit<LucideIconProps, 'testId'>>({
    name: 'Search',
  });

  useEffect(() => {
    if (
      onClearButtonPress &&
      textInputProps.value &&
      textInputProps.value.length > 0
    )
      setIconData({
        name: 'X',
        onPress: onClearButtonPress,
      });
    else setIconData({ name: 'Search' });
  }, [onClearButtonPress, textInputProps.value]);
  return (
    <TextInput
      size="sm"
      trailingIconProps={{ color: 'textTertiary', ...iconData }}
      {...textInputProps}
    />
  );
};
export default SearchInput;
