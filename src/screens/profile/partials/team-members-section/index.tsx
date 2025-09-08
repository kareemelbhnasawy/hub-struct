import React from 'react';
import { View } from 'react-native';
import { Headline } from '@/components/atoms';
import { List, StatCard } from '@/components/molecules';
import TeamMembersSectionProps from './interface';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import TeamMemberItem from '../team-member-item';

const TeamMembersSection = ({
  testId,
  members,
  stats,
  headerProps,
  containerStyle,
  listContainerStyle,
}: TeamMembersSectionProps) => {
  const { getThemedStyles } = useThemeStore();
  const themed = getThemedStyles(styles);
  return (
    <View
      testID={`${testId}-team-section`}
      style={[themed.container, containerStyle]}>
      {!!stats?.length && (
        <View style={themed.statsRow}>
          {stats.map((s) => (
            <StatCard
              key={s.id}
              testId={`${testId}-stat-${s.id}`}
              titleProps={s.titleProps}
              value={s.value}
              iconName={s.iconName}
              intent={s.intent}
              containerStyle={themed.stat}
            />
          ))}
        </View>
      )}
      {headerProps && <Headline size="xs" weight="Bold" {...headerProps} />}
      <List
        testId={`${testId}-members`}
        data={members}
        keyField="id"
        nestedScrollEnabled
        keyboardShouldPersistTaps="handled"
        listContainerStyle={[themed.list, listContainerStyle]}
        renderItem={({ item }) => (
          <TeamMemberItem
            testId={`${testId}-member-${item.id}`}
            memberName={item.memberName}
            memberTitle={item.memberTitle}
            memberStatus={item.memberStatus}
            avatarImage={item.avatarImage}
            avatarStatus={item.avatarStatus}
            onPress={item.onPress}
          />
        )}
      />
    </View>
  );
};

export default TeamMembersSection;
