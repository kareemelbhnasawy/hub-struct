import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { Page } from '@/components/templates';
import { BaseButton, BaseSheet } from '@/components/molecules';
import { useState } from 'react';
import { SnapPoints } from '@/components/molecules/base-sheet/constants';
import { SearchInput } from '@/components/organisms';
import { Spacer } from '@/components/atoms';
import { List } from '@/components/molecules';
import { SkillItemDataType } from './interface';
import Checkmark from '@/components/molecules/checkmark';
import { log } from '@/utilities';
import { Headline } from '@/components/atoms';
import { TagCollection } from '@/components/organisms';
import { useCallback, useEffect } from 'react';
import useGetSkills from '@/network/services/profile/get-skills/get-skills.hook';
import useDeleteSkills from '@/network/services/profile/delete-skills/delete-skills.hook';
import { useCustomInvalidate } from '@/network/hooks';
import PROFILE_QUERY_KEYS from '@/network/services/profile/profile.query-keys';
import usePostSkills from '@/network/services/profile/post-skills/post-skills.hook';
import { View } from 'react-native';

const MySkillsScreen = () => {
  const screenTestId = 'my-skills-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [sheetVisibility, setSheetVisibility] = useState(true);

  const listItemData: SkillItemDataType[] = [
    { title: 'JavaScript', id: '1' },
    { title: 'TypeScript', id: '2' },
    { title: 'React Native', id: '3' },
    { title: 'Node.js', id: '4' },
    { title: 'Python', id: '5' },
    { title: 'Django', id: '6' },
    { title: 'Flutter', id: '7' },
    { title: 'Swift', id: '8' },
    { title: 'Kotlin', id: '9' },
    { title: 'Java', id: '10' },
  ];

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
        textProps={{ text: item.title }}
        containerStyle={themedStyles.searchItemContainer}
        onCheck={() => {
          log('Skill selected: ', item.id);
        }}
        onUncheck={() => {
          log('Skill unselected: ', item.id);
        }}
      />
    );
  };

  const { invalidateQuery } = useCustomInvalidate();

  const { data: skillsData } = useGetSkills();

  const onDeleteSkillSuccess = useCallback(() => {
    invalidateQuery(PROFILE_QUERY_KEYS.GET_SKILLS);
  }, [invalidateQuery]);

  const onAddSkillSuccess = useCallback(() => {
    invalidateQuery(PROFILE_QUERY_KEYS.GET_SKILLS);
  }, [invalidateQuery]);

  const { mutate: mutateAddSkill } = usePostSkills(onAddSkillSuccess);

  useEffect(() => {
    mutateAddSkill({ skillName: 'React Native' });
  }, [mutateAddSkill]);
  const { mutate: mutateDeleteSkill } = useDeleteSkills(onDeleteSkillSuccess);
  return (
    <Page
      testId={screenTestId}
      hasHeader={false}
      isLoading={false}
      disableSafeAreaTop={true}>
      <View style={themedStyles.container}>
         <BaseButton
        testId={`${screenTestId}-idk-button`}
        textProps={{ text: 'My Skills Screen' }}
        onPress={() => {}}
      />
      {skillsData && skillsData.length > 0 ? (
        <Headline
          testId={`${screenTestId}-skills-total-label`}
          text={`Egmaly Maharatak (${skillsData.length})`}
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
       <BaseSheet
          testId={screenTestId}
          modalVisible={sheetVisibility}
          setModalVisible={setSheetVisibility}
          titleProps={{ text: 'profile.skills.mySkills' }}
          headerVariant="centerWithClose"
          hasCloseButton
          snapPoints={SnapPoints.FULL}>
          <SearchInput testId={screenTestId} placeholder="profile.skills.searchToAdd" />
          <Spacer />
          <List<SkillItemDataType>
            testId={screenTestId}
            data={listItemData}
            renderItem={renderListItem}
            keyField="title"
            scrollEnabled={false}
            emptyComponentProps={{
              iconProps: {
                name: 'BrainCircuit',
                color: 'foregroundQuinary',
                size: 100,
                strokeWidth: 1,
              },
              headlineProps: {
                text: 'profile.skills.noSkillsYet',
                size: 'xs',
                weight: 'Semibold',
              },
              paragraphProps: {
                text: 'profile.skills.addSkillsPrompt',
                size: 'xl',
                weight: 'Regular',
              },
            }}
          />
        </BaseSheet>
      </View>
    </Page>
  );
};

export default MySkillsScreen;
