import React from 'react';
import CustomTopTabsWithIcon, { TopTab } from '@/components/organisms/top-tabs';
import { Page } from '@/components/templates';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { TeamMembersSection } from '@/screens/profile/partials';
import useGetTeam from '@/network/services/profile/get-team/get-team.hook';
import { useNavigation } from '@/hooks';
import { View } from 'react-native';
import { useThemeStore } from '@/store/theme';
import styles from './styles';

const MyTeamScreen = () => {
  const { isLoading, data } = useGetTeam();
  const navigation = useNavigation();
  const testId = 'my-team-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const MinistryTab = () => (
    <View style={themedStyles.container}>
      <TeamMembersSection
        testId={`${testId}-ministry`}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        members={(data?.ministryEmployees ?? []).map((m: any) => ({
          id: String(m.id ?? m.userId ?? m.name),
          memberName: m.name,
          memberTitle: m.position,
          memberStatus: m.statusDescription,
          avatarImage: m.avatarImage,
          avatarStatus: m.status,
          onPress: () =>
            navigation.navigateTo('TeamMemberProfile', {
              userId: String(m.userId ?? m.id ?? ''),
              name: m.name,
              position: m.position,
              avatarImage: m.avatarImage,
              status: m.status,
            }),
        }))}
        stats={[
          {
            id: 'present',
            titleProps: { text: 'profile.myteam.presentToday' },
            value: data?.presentMinistryEmployees,
            iconName: 'CircleCheckBig',
            intent: 'success',
          },
          {
            id: 'absent',
            titleProps: { text: 'profile.myteam.absentToday' },
            value: data?.absentMinistryEmployees,
            iconName: 'CircleMinus',
            intent: 'error',
          },
        ]}
        headerProps={{
          testId: `${testId}-ministry-header`,
          text: 'profile.myteam.membersHeader',
          textProps: {
            count: String((data?.ministryEmployees ?? []).length),
          },
        }}
      />
    </View>
  );

  const ContractedTab = () => (
    <View style={themedStyles.container}>
      <TeamMembersSection
        testId={`${testId}-contracted`}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        members={(data?.contractedEmployees ?? []).map((m: any) => ({
          id: String(m.id ?? m.userId ?? m.name),
          memberName: m.name,
          memberTitle: m.position,
          memberStatus: m.statusDescription,
          avatarImage: m.avatarImage,
          avatarStatus: m.status,
          onPress: () =>
            navigation.navigate('TeamMemberProfile', {
              userId: String(m.userId ?? m.id ?? ''),
              name: m.name,
              position: m.position,
              avatarImage: m.avatarImage,
              status: m.status,
            }),
        }))}
        stats={[
          {
            id: 'present',
            titleProps: {
              text: 'profile.myteam.presentToday',
              testId: `${testId}-contracted-present`,
            },
            value: data?.presentContractedEmployees,
            iconName: 'CircleCheckBig',
            intent: 'success',
          },
          {
            id: 'absent',
            titleProps: {
              text: 'profile.myteam.absentToday',
              testId: `${testId}-contracted-absent`,
            },
            value: data?.absentContractedEmployees,
            iconName: 'CircleMinus',
            intent: 'error',
          },
        ]}
        headerProps={{
          testId: `${testId}-contracted-header`,
          text: 'profile.myteam.membersHeader',
          textProps: {
            count: String((data?.contractedEmployees ?? []).length),
          },
        }}
      />
    </View>
  );

  const tabs: TopTab[] = [
    {
      key: 'profile.myteam.ministryEmployees',
      label: 'profile.myteam.ministryEmployees',
      iconName: 'Building',
      component: MinistryTab,
    },
    {
      key: 'profile.myteam.contractEmployees',
      label: 'profile.myteam.contractEmployees',
      iconName: 'Handshake',
      component: ContractedTab,
    },
  ];

  return (
    <Page
      scrollEnabled={false}
      testId={testId}
      hasHeader={true}
      isLoading={isLoading}
      pageHeaderVariant={PageHeaderVariants.BackWithTitle}
      pageHeaderProps={{
        titleProps: { text: 'profile.team' },
        isTitleCentered: true,
      }}
      noPaddings>
      <CustomTopTabsWithIcon tabs={tabs} />
    </Page>
  );
};

export default MyTeamScreen;
