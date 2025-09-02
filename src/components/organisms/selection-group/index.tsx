import { List } from '@/components/molecules';
import SelectionGroupProps from './interface';
import { useCallback } from 'react';

const SelectionGroup = ({
  testId,
  valueKey,
  value,
  onListItemPress,
  onChangeValue,
  renderItem,
  renderSelectedItem,
  spread,
  ...listProps
}: SelectionGroupProps) => {
  const onListItemPressFn = (item: object) => {
    if (spread) {
      onChangeValue?.(item);
    } else {
      onChangeValue?.(item[valueKey]);
    }
    onListItemPress?.(item);
  };

  const renderItemFn = useCallback(
    (arg: { item: object; index: number }) => {
      if (
        (spread && arg.item[valueKey] === value[valueKey]) ||
        (!spread && arg.item[valueKey] === value)
      ) {
        return renderSelectedItem(arg);
      } else {
        return renderItem(arg);
      }
    },
    [renderItem, renderSelectedItem, spread, value, valueKey],
  );

  return (
    <List
      testId={`${testId}-selection-group`}
      {...listProps}
      renderItem={(arg) => renderItemFn(arg)}
      onListItemPress={onListItemPressFn}
    />
  );
};
export default SelectionGroup;
