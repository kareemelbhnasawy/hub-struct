import { ListProps } from '@/components/molecules/list/interface';

interface SelectionGroupProps extends ListProps<object> {
  renderSelectedItem: (info: {
    item: object;
    index: number;
  }) => React.ReactElement;
  valueKey: string;
  value?: string | object;
  onChangeValue?: (arg0: string | object) => void;
  spread?: boolean;
}

export default SelectionGroupProps;
