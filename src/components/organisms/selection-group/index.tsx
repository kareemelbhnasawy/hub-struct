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
  const onListItemPressFn = (item: Record<string, unknown>) => {
    if (spread) {
      onChangeValue?.(item);
    } else {
      onChangeValue?.(item[valueKey] as string | object);
    }
    onListItemPress?.(item);
  };

  const renderItemFn = useCallback(
    (arg: { item: Record<string, unknown>; index: number }) => {
      if (
        (spread &&
          value &&
          typeof value === 'object' &&
          arg.item[valueKey] ===
            (value as Record<string, unknown>)[valueKey]) ||
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
