import { ListProps } from '@/components/molecules/list/interface';
import BaseSheetProps from '@/components/molecules/base-sheet/interface';
import { RNStyle } from '@/types/themes';

interface ActionMenuItemType {
  value: string;
  label: string;
}

interface ActionMenuProps extends BaseSheetProps {
  onSelect?: (ang0: object) => void;
  items: ActionMenuItemType[] | object[];
  closeModalOnSelect?: boolean;
  valueKey?: string;
  labelKey?: string;
  onEndReached?: (info: { distanceFromEnd: number }) => void;
  onEndReachedThreshold?: number;
  listStyle?: RNStyle;
  listProps?: Omit<ListProps<ActionMenuItemType | object>, 'testId' | 'data'>;
}
export default ActionMenuProps;
