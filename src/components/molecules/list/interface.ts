import BaseTextProps from '@/components/atoms/base-text/interface';
import SpacerProps from '@/components/atoms/spacer/interface';
import { FlashListProps, ListRenderItemInfo } from '@shopify/flash-list';
import { ViewStyle } from 'react-native';

interface ListProps<TItem>
  extends Omit<FlashListProps<TItem>, 'testID' | 'renderItem'> {
  testId: string;
  /**
   * The component responsible for rendering the data
   * Please use <ListItem /> for full compatibility.
   */
  renderItem: (info: { item: TItem; index: number }) => React.ReactElement;
  isLoading?: boolean;
  /**
   * Flag to determine whether or not the list is loading more data or simply requesting different data.
   */
  isSkeleton?: boolean;
  spacerProps?: SpacerProps;
  listContainerStyle?: ViewStyle;
  emptyComponentProps?: BaseTextProps;
  /**
   * Used to determine how many skeleton components
   * should be rendered in case of loading
   *
   * default: 4
   */
  loadingItemCount?: number;
  /**
   *
   * @param isListEmpty boolean returned from list component to tell the parent that this list is empty (normally used after filtering list inside the component)
   */
  isListEmptyCallback?: (isListEmpty: boolean) => void;
  /**
   * on list item press added to list props so it can be supported throughout the reusable list components
   */
  onListItemPress?: (renderItemInfo: ListRenderItemInfo<TItem>) => void;
  keyField?: string;
}

export type { ListProps };
