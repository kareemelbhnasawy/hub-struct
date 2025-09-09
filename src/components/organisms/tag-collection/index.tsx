import { useCallback } from 'react';
import TagCollectionProps from './interface';
import { List, Tag } from '@/components/molecules';
import { TagData } from './types';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import { Spacer } from '@/components/atoms';

const TagCollection = ({
  emptyComponentProps,
  testId,
  tagHasIcon = true,
  tagSize = 'md',
  data,
  tagOnPress,
}: TagCollectionProps) => {
  const componentTestId = `${testId}-tag-collection`;
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const listSeparatorFn = useCallback(() => <Spacer space={8} />, []);

  const renderItemFn = useCallback(
    ({ item, index }: { item: TagData; index: number }) => (
      <Tag
        {...item}
        testId={`${componentTestId}-tag-#${index}`}
        hasIcon={tagHasIcon}
        onPress={tagOnPress ? () => tagOnPress(item) : undefined}
        size={tagSize}></Tag>
    ),
    [componentTestId, tagHasIcon, tagOnPress, tagSize],
  );

  // eslint-disable-next-line no-console
  console.log(emptyComponentProps);
  return (
    <List<TagData>
      contentContainerStyle={themedStyles.tagsList}
      scrollEnabled={false} // yes this is a non-scroll list, idk.
      ItemSeparatorComponent={listSeparatorFn}
      data={data}
      testId={`${componentTestId}`}
      emptyComponentProps={{
        iconProps: { name: 'BrainCircuit', size: 80 },
        headlineProps: {
          text: 'profile.skills.emptyTagsListHeadline',
          weight: 'Semibold',
        },
        paragraphProps: { text: 'profile.skills.emptyTagsListDesc' },
      }}
      renderItem={renderItemFn}></List>
  );
};

export default TagCollection;
