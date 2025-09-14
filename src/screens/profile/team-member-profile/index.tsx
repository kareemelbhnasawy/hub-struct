import React from 'react';
import Page from '@/components/templates/page';
import ProfileHeading from '../partials/profile-heading';
import { useNavigation } from '@/hooks';
import { mapAvatarStatus } from '../partials/team-member-item/utilities';
import { useProfileStore } from '@/store/profile';
import CustomTopTabsWithIcon, { TopTab } from '@/components/organisms/top-tabs';
import {
  BusinessDetailsSection,
  TeamMembersSection,
} from '@/screens/profile/partials';
import { Pressable, ScrollView, View } from 'react-native';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import useGetTeam from '@/network/services/profile/get-team/get-team.hook';
import { Headline, Spacer } from '@/components/atoms';
import useGetPersonDetails from '@/network/services/profile/get-person-details/get-person-details.hook';
import {
  basicInfoDataHandler as basicPersonInfoDataHandler,
  contactInfoDataHandler as contactPersonInfoDataHandler,
} from '../person-details/constants';
import {
  basicInfoDataHandler,
  contactInfoDataHandler,
} from '../business-details/constants';

export type TeamMemberProfileParams = {
  userId: string;
  name: string;
  position: string;
  avatarImage?: string | null;
  status?: 'Online' | 'Away' | 'Offline';
};

const TeamMemberProfileScreen = () => {
  const navigation = useNavigation<'TeamMemberProfile'>();
  const { userId, name, position, avatarImage, status } = (navigation.params ||
    ({} as TeamMemberProfileParams)) as TeamMemberProfileParams;
  const { bannerId } = useProfileStore();
  const testId = 'team-member-profile';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const { data: teamData, isLoading: isLoadingTeam } = useGetTeam();
  const { data: personDetails } = useGetPersonDetails(userId);
  const basicInfoData = basicPersonInfoDataHandler(personDetails);
  const contactInfoData = contactPersonInfoDataHandler(personDetails, true);
  const basicBusinessInfoData = basicInfoDataHandler(personDetails);
  const contactBusinessInfoData = contactInfoDataHandler(personDetails, true);
  const TeamTab = () => {
    const merged = [
      ...(teamData?.ministryEmployees ?? []),
      ...(teamData?.contractedEmployees ?? []),
    ];

    return (
      <View style={themedStyles.container}>
        <TeamMembersSection
          testId={`${testId}-team`}
          // map API objects into TeamMemberItem props
          members={merged.map((m) => ({
            id: String(m.id ?? m.userId ?? m.name),
            memberName: m.name,
            memberTitle: m.position,
            memberStatus: m.statusDescription,
            avatarImage: m.avatarImage,
            avatarStatus: m.status,
            onPress: () =>
              navigation.pushTo('TeamMemberProfile', {
                userId: String(m.userId ?? m.id ?? ''),
                name: m.name,
                position: m.position,
                avatarImage: m.avatarImage,
                status: m.status,
              }),
          }))}
          headerProps={{
            testId: `${testId}-team-header`,
            text: 'profile.myteam.membersHeader',
            textProps: { count: String(merged.length) },
          }}
        />
        <Spacer space={16} />
      </View>
    );
  };
  const PersonalTab = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={themedStyles.tabContainer}>
      <Spacer space={20} />
      <BusinessDetailsSection
        testId={`${testId}-personal`}
        sections={[
          {
            key: 'personal-basic',
            title: 'profile.personDetails.basicInfo',
            icon: 'User',
            iconContainerStyle: themedStyles.iconDescriptiveOrange,
            data: basicInfoData,
          },
          {
            key: 'personal-contact',
            title: 'profile.personDetails.teamContactInfo',
            icon: 'Phone',
            iconContainerStyle: themedStyles.iconDescriptiveGreen,
            data: contactInfoData,
          },
        ]}
      />
      <Spacer space={20} />
    </ScrollView>
  );

  const BusinessTab = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={themedStyles.tabContainer}>
      <Spacer space={20} />
      <BusinessDetailsSection
        testId={`${testId}-business`}
        sections={[
          {
            key: 'work-contact',
            title: 'profile.business.workContact',
            icon: 'Phone',
            iconContainerStyle: themedStyles.iconDescriptiveOrange,
            data: contactBusinessInfoData,
          },
          {
            key: 'basic-info',
            title: 'profile.business.jobInfo',
            icon: 'IdCard',
            iconContainerStyle: themedStyles.iconDescriptiveTeal,
            data: basicBusinessInfoData,
          },
        ]}
      />
      <Spacer space={20} />
    </ScrollView>
  );

  const tabs: TopTab[] = [
    {
      key: 'profile.job-details',
      label: 'profile.job-details',
      iconName: 'Building',
      component: BusinessTab,
    },
    {
      key: 'profile.personal-details',
      label: 'profile.personal-details',
      iconName: 'User',
      component: PersonalTab,
    },
    {
      key: 'profile.teamLabel',
      label: 'profile.teamLabel',
      iconName: 'Network',
      component: TeamTab,
    },
  ];
  const customGlassComponent = (
    <Pressable onPress={() => navigation.goToExistingOrPush('MyTeam')}>
      <Headline
        text="profile.team"
        testId="profile.team.headline"
        size="2xs"
        weight="Medium"
      />
    </Pressable>
  );
  return (
    <Page
      testId={testId}
      hasHeader={false}
      noPaddings
      scrollEnabled={false}
      disableSafeAreaTop
      isLoading={isLoadingTeam}>
      <ProfileHeading
        testId={testId}
        bannerId={bannerId}
        avatarUrl={avatarImage ?? undefined}
        name={personDetails?.primaryInfo?.name ?? name}
        displayName={personDetails?.primaryInfo?.name ?? name}
        displayTitle={position}
        customGlassComponent={customGlassComponent}
        status={mapAvatarStatus(status)}
      />
      <CustomTopTabsWithIcon tabs={tabs} />
    </Page>
  );
};

export default TeamMemberProfileScreen;
