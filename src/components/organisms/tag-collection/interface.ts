import { ListProps } from '@/components/molecules/list/interface';
import TagProps from '@/components/molecules/tag/interface';
import { TagData } from './types';

interface TagCollectionProps {
  emptyComponentProps?: ListProps<TagData>['emptyComponentProps'];
  tagHasIcon?: boolean;
  newTags?: number[];
  isLoading?: boolean;
  tagSize?: TagProps['size'];
  testId: string;
  data: TagData[];
  tagOnPress?: (item: TagData) => boolean | void | null | undefined;
}

export default TagCollectionProps;
