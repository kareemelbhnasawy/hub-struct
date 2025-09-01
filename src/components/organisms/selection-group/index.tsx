import { List } from '@/components/molecules';
import SelectionGroupProps from './interface';

const SelectionGroup = ({
  testId,
  valueKey,
  value,
  onListItemPress,
  onChangeValue,
  renderItem,
  renderSelectedItem,
  ...listProps
}: SelectionGroupProps) => {
  const onListItemPressFn = (item: TItem) => {
    onChangeValue?.(item[valueKey]);
    onListItemPress?.(item);
  };

  return (
    <List
      testId={`${testId}-selection-group`}
      {...listProps}
      renderItem={(arg) =>
        arg.item[valueKey] === value ? renderSelectedItem(arg) : renderItem(arg)
      }
      onListItemPress={onListItemPressFn}
    />
  );
};
export default SelectionGroup;
