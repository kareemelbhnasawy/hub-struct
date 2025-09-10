import { useCallback, useEffect, useState } from 'react';
import TagCollectionProps from './interface';
import { List, Tag } from '@/components/molecules';
import { TagData } from './types';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import { Spacer } from '@/components/atoms';

const TagCollection = ({
  emptyComponentProps,
  testId,
  newTags,
  tagHasIcon = true,
  tagSize = 'lg',
  data,
  tagOnPress,
}: TagCollectionProps) => {
  const componentTestId = `${testId}-tag-collection`;
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [combinedData, setCombinedData] = useState<TagData[]>(data);

  const listSeparatorFn = useCallback(() => <Spacer space={8} />, []);

  const renderItemFn = useCallback(
    ({ item, index }: { item: TagData; index: number }) => (
      <Tag
        {...item}
        testId={`${componentTestId}-tag-#${index}`}
        hasIcon={tagHasIcon}
        onPress={tagOnPress ? () => tagOnPress(item) : undefined}
        size={tagSize}
        containerStyle={
          newTags?.includes(item.itemId)
            ? themedStyles.highlightedTagContainer
            : undefined
        }
      />
    ),
    [componentTestId, tagHasIcon, tagOnPress, tagSize],
  );

  useEffect(() => {
    if(newTags && newTags.length > 0) {
      const updatedData = data.filter(item => !newTags.includes(item.itemId));
      const newTagData = data.filter(item => newTags.includes(item.itemId));
      setCombinedData([...newTagData, ...updatedData]);
    } else {
      setCombinedData(data);
    }
  }, [data]);

  return (
    <List<TagData>
      contentContainerStyle={themedStyles.tagsList}
      scrollEnabled={false} // yes this is a non-scroll list, idk.
      ItemSeparatorComponent={listSeparatorFn}
      data={combinedData}
      testId={`${componentTestId}`}
      emptyComponentProps={
        emptyComponentProps ?? {
          iconProps: { name: 'BrainCircuit', size: 80 },
          headlineProps: {
            text: 'profile.skills.noSkillsYet',
            weight: 'Semibold',
          },
          paragraphProps: { text: 'profile.skills.addSkillsPrompt' },
        }
      }
      renderItem={renderItemFn}></List>
  );
};

export default TagCollection;
