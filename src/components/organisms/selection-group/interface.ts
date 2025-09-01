import { ListProps } from '@/components/molecules/list/interface';

interface SelectionGroupProps extends ListProps<TItem> {
  renderSelectedItem: (info: {
    item: TItem;
    index: number;
  }) => React.ReactElement;
  valueKey: string;
  value?: string;
  onChangeValue?: (arg0: string) => void;
}

export default SelectionGroupProps;
