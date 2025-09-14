import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { Page } from '@/components/templates';
import { BaseSheet } from '@/components/molecules';
import { useEffect, useState } from 'react';
import { SnapPoints } from '@/components/molecules/base-sheet/constants';
import { SearchInput } from '@/components/organisms';
import { Paragraph, Spacer } from '@/components/atoms';
import { List } from '@/components/molecules';
import { SkillItemDataType } from './interface';
import Checkmark from '@/components/molecules/checkmark';
import { Headline } from '@/components/atoms';
import { TagCollection } from '@/components/organisms';
import { useCallback } from 'react';
import useGetSkills from '@/network/services/profile/get-skills/get-skills.hook';
import useDeleteSkills from '@/network/services/profile/delete-skills/delete-skills.hook';
import { useCustomInvalidate } from '@/network/hooks';
import PROFILE_QUERY_KEYS from '@/network/services/profile/profile.query-keys';
import usePostSkills from '@/network/services/profile/post-skills/post-skills.hook';
import { Pressable, View } from 'react-native';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import useSearchSkills from '@/network/services/profile/search-skills/search-skills.hook';
import { useDebounce } from 'use-debounce';
import isEmpty from '@/utilities/is-empty';
import { PostSkillsResponse } from '@/network/services/profile/types';
import { wait } from '@/utilities';

const MySkillsScreen = () => {
  const screenTestId = 'my-skills-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [sheetVisibility, setSheetVisibility] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [newTags, setNewTags] = useState<number[]>([]);
  const [searchResults, setSearchResults] = useState<
    SkillItemDataType[] | undefined
  >([]);
  const [debouncedText] = useDebounce(searchText, 500);

  const { invalidateQuery } = useCustomInvalidate();

  const { data: skillsData, isLoading } = useGetSkills();

  const removeTagFromNewTags = (id: number) => {
    setNewTags((prev) => prev.filter((tagId) => tagId !== id));
  };

  const onDeleteSkillSuccess = useCallback(() => {
    invalidateQuery(PROFILE_QUERY_KEYS.GET_SKILLS);
    if (!isEmpty(debouncedText)) {
      mutateSearchSkills({ keyword: debouncedText });
    }
  }, [debouncedText, invalidateQuery]);

  const onAddSkillSuccess = useCallback(
    (data: PostSkillsResponse) => {
      invalidateQuery(PROFILE_QUERY_KEYS.GET_SKILLS);
      wait(60000).then(() => removeTagFromNewTags(data.skillId));
      if (!isEmpty(debouncedText)) {
        mutateSearchSkills({ keyword: debouncedText });
      }
      setNewTags((prev) => [...prev, data.skillId]);
    },
    [debouncedText, invalidateQuery],
  );

  const { mutate: mutateAddSkill, isPending: isPendingPost } =
    usePostSkills(onAddSkillSuccess);
  const { mutate: mutateDeleteSkill, isPending: isPendingDelete } =
    useDeleteSkills(onDeleteSkillSuccess);
  const {
    mutate: mutateSearchSkills,
    data: skillsSearchData,
    isPending,
  } = useSearchSkills();

  useEffect(() => {
    if (debouncedText && debouncedText.length > 0) {
      mutateSearchSkills({ keyword: debouncedText });
    }
  }, [debouncedText, mutateSearchSkills]);

  useEffect(() => {
    if (!isPending) {
      setSearchResults(
        skillsSearchData?.skills as SkillItemDataType[] | undefined,
      );
    }
  }, [skillsSearchData]);

  const renderListItem = ({
    item,
    index,
  }: {
    item: SkillItemDataType;
    index: number;
  }) => {
    return (
      <Checkmark
        testId={`${screenTestId}-item-${index}`}
        textProps={{ text: item.name }}
        containerStyle={themedStyles.searchItemContainer}
        onCheck={() => {
          mutateAddSkill({ skillName: item.name, skillId: Number(item.id) });
        }}
        checked={item.checked}
        onUncheck={() => {
          mutateDeleteSkill({ skillId: Number(item.id) });
        }}
      />
    );
  };

  const handleAddNewSkill = (skillName: string) => {
    mutateAddSkill({ skillName });
    setSearchText('');
  };

  const renderNoTagFoundComponent = () => {
    return {
      iconProps: {
        name: 'SearchX',
        color: 'foregroundQuinary',
        size: 100,
        strokeWidth: 1,
      },
      headlineProps: {
        text: 'profile.skills.searchNotFound',
        size: 'xs',
        weight: 'Semibold',
      },
      paragraphProps: {
        text: 'profile.skills.addPrompt',
        size: 'lg',
        weight: 'Regular',
        children: (
          <Paragraph
            testId={`${screenTestId}-bold-skill-name`}
            text={` ${searchText}`}
            size="lg"
            weight="Bold"
          />
        ),
      },
      buttonProps: {
        textProps: { text: 'profile.skills.addButton' },
        size: 'md',
        variant: 'secondary',
        leftIcon: { name: 'CirclePlus', size: 16 },
        onPress: () => handleAddNewSkill(searchText),
      },
    };
  };

  const renderEmptySearchTextComponent = () => {
    return {
      iconProps: {
        name: 'Search',
        color: 'foregroundQuinary',
        size: 100,
        strokeWidth: 1,
      },
      headlineProps: {
        text: 'profile.skills.searchToAdd',
        size: 'xs',
        weight: 'Semibold',
      },
    };
  };

  return (
    <Page
      testId={screenTestId}
      hasHeader={true}
      noPaddings
      isLoading={isLoading || isPendingDelete}
      pageHeaderVariant={PageHeaderVariants.BackWithTitle}
      pageHeaderProps={{
        titleProps: {
          text: 'profile.skills.mySkills',
        },
        isTitleCentered: true,
      }}
      innerPageStyle={themedStyles.skillsContainer}
      disableSafeAreaTop={false}>
      <View style={themedStyles.container}>
        <Spacer space={10} />
        <Pressable onPress={() => setSheetVisibility(true)}>
          <SearchInput
            testId={screenTestId}
            style={themedStyles.searchBar}
            disabled
            placeholder="profile.skills.searchToAdd"
          />
        </Pressable>
        <View>
          {skillsData && skillsData.length > 0 ? (
            <View style={themedStyles.skillsLabelContainer}>
              <Headline
                testId={`${screenTestId}-skills-total-label`}
                text={'profile.skills.totalSkills'}
                size="2xs"
                weight="Medium"
                style={themedStyles.skillsLabel}
              />
              <Headline
                testId={`${screenTestId}-skills-number-label`}
                text={`(${skillsData.length})`}
                size="2xs"
                weight="Medium"
              />
            </View>
          ) : null}

          <TagCollection
            testId={screenTestId}
            newTags={newTags}
            data={
              skillsData?.map((val) => ({
                itemId: val.id,
                labelProps: { text: val.name },
              })) || []
            }
            tagOnPress={(item) => mutateDeleteSkill({ skillId: item.itemId })}
          />
        </View>
        <BaseSheet
          testId={screenTestId}
          modalVisible={sheetVisibility}
          setModalVisible={setSheetVisibility}
          titleProps={{
            text: 'profile.skills.addSkill',
            size: 'sm',
            weight: 'Semibold',
            style: themedStyles.skillsLabel,
          }}
          headerVariant="centerWithClose"
          hasCloseButton
          enableDynamicSizing={false}
          snapPoints={SnapPoints.FULL}>
          <SearchInput
            value={searchText}
            onChangeValue={(text) => setSearchText(text)}
            debounceDelay={800}
            testId={screenTestId}
            placeholder="profile.skills.searchToAdd"
          />
          <Spacer />
          <List<SkillItemDataType>
            testId={screenTestId}
            data={searchResults}
            isLoading={isPendingPost}
            renderItem={renderListItem}
            keyField="name"
            scrollEnabled={false}
            emptyComponentProps={
              searchText.length > 0
                ? renderNoTagFoundComponent()
                : renderEmptySearchTextComponent()
            }
          />
        </BaseSheet>
      </View>
    </Page>
  );
};

export default MySkillsScreen;
