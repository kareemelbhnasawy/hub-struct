import TagProps from '@/components/molecules/tag/interface';

export type TagData = Omit<TagProps, 'testId' | 'size' | 'hasIcon'> & {
  itemId: number;
};
