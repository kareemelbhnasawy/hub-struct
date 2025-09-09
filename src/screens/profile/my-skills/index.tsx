import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { Page } from '@/components/templates';
import { BaseButton } from '@/components/molecules';
import { Headline } from '@/components/atoms';
import { TagCollection } from '@/components/organisms';
import { useCallback, useEffect } from 'react';
import useGetSkills from '@/network/services/profile/get-skills/get-skills.hook';
import useDeleteSkills from '@/network/services/profile/delete-skills/delete-skills.hook';
import { useCustomInvalidate } from '@/network/hooks';
import PROFILE_QUERY_KEYS from '@/network/services/profile/profile.query-keys';
import usePostSkills from '@/network/services/profile/post-skills/post-skills.hook';

const MySkillsScreen = () => {
  const screenTestId = 'profile-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

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
    <Page testId={screenTestId} isLoading={false}>
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
    </Page>
  );
};

export default MySkillsScreen;
