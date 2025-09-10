import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { Page } from '@/components/templates';
import { BaseSheet } from '@/components/molecules';
import { useEffect, useState } from 'react';
import { SnapPoints } from '@/components/molecules/base-sheet/constants';
import { SearchInput } from '@/components/organisms';
import { Spacer } from '@/components/atoms';
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
import { View } from 'react-native';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import useSearchSkills from '@/network/services/profile/search-skills/search-skills.hook';
import { useDebounce } from 'use-debounce';
import isEmpty from '@/utilities/is-empty';

const MySkillsScreen = () => {
  const screenTestId = 'my-skills-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [sheetVisibility, setSheetVisibility] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedText] = useDebounce(searchText, 500);

  const { invalidateQuery } = useCustomInvalidate();

  const { data: skillsData, isLoading } = useGetSkills();

  const onDeleteSkillSuccess = useCallback(() => {
    invalidateQuery(PROFILE_QUERY_KEYS.GET_SKILLS);
    if (!isEmpty(debouncedText)) {
      mutateSearchSkills({ keyword: debouncedText });
    }
  }, [debouncedText, invalidateQuery]);

  const onAddSkillSuccess = useCallback(() => {
    invalidateQuery(PROFILE_QUERY_KEYS.GET_SKILLS);
    if (!isEmpty(debouncedText)) {
      mutateSearchSkills({ keyword: debouncedText });
    }
  }, [debouncedText, invalidateQuery]);

  const { mutate: mutateAddSkill } = usePostSkills(onAddSkillSuccess);
  const { mutate: mutateDeleteSkill } = useDeleteSkills(onDeleteSkillSuccess);
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
      setSearchResults(skillsSearchData?.skills);
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
        onUncheck={() => {
          mutateDeleteSkill({ skillId: Number(item.id) });
        }}
      />
    );
  };

  return (
    <Page
      testId={screenTestId}
      hasHeader={true}
      isLoading={isLoading}
      pageHeaderVariant={PageHeaderVariants.BackWithTitle}
      pageHeaderProps={{
        titleProps: {
          text: 'profile.skills.mySkills',
        },
        isTitleCentered: true,
      }}
      disableSafeAreaTop={false}>
      <View style={themedStyles.container}>
        <Spacer space={10} />
        <SearchInput
          testId={screenTestId}
          disabled
          placeholder="profile.skills.searchToAdd"
          onPress={() => setSheetVisibility(true)}
        />
        <View>
          {skillsData && skillsData.length > 0 ? (
            <Headline
              testId={`${screenTestId}-skills-total-label`}
              text={'profile.skills.totalSkills'}
              textProps={{ count: String(skillsData.length) }}
              size="2xs"
              weight="Bold"
              style={themedStyles.skillsLabel}
            />
          ) : null}

          <TagCollection
            testId="we"
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
          titleProps={{ text: 'profile.skills.mySkills' }}
          headerVariant="centerWithClose"
          hasCloseButton
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
            renderItem={renderListItem}
            keyField="title"
            scrollEnabled={false}
            emptyComponentProps={{
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
                textProps: { skill: debouncedText },
                size: 'xl',
                weight: 'Regular',
              },
              buttonProps: {
                textProps: { text: 'profile.skills.addButton' },
                size: 'md',
                variant: 'secondary',
                leftIcon: { name: 'CirclePlus', size: 16 },
                onPress: () => mutateAddSkill({ skillName: searchText }),
              },
            }}
          />
        </BaseSheet>
      </View>
    </Page>
  );
};

export default MySkillsScreen;
