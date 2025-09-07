import React from 'react';
import { View, StyleSheet } from 'react-native';
import TeamMembersSection from '../team-members-section';

const members = [
  {
    id: '1',
    memberName: 'مصطفى علي',
    memberTitle: 'مبرمج',
    avatarImage: 'https://i.pravatar.cc/150?img=11',
    avatarStatus: 'active' as const,
  },
  {
    id: '2',
    memberName: 'سارة أحمد',
    memberTitle: 'مصممة جرافيك',
    avatarImage: 'https://i.pravatar.cc/150?img=32',
    avatarStatus: 'away' as const,
    memberStatus: 'academic-vacation' as const,
  },
  {
    id: '3',
    memberName: 'علي حسين',
    memberTitle: 'مهندس بيانات',
    avatarImage: 'https://i.pravatar.cc/150?img=15',
    avatarStatus: 'active' as const,
  },
  {
    id: '4',
    memberName: 'فاطمة جمال',
    memberTitle: 'مديرة مشاريع',
    avatarImage: 'https://i.pravatar.cc/150?img=47',
    avatarStatus: 'active' as const,
  },
  {
    id: '5',
    memberName: 'يوسف عبد الله',
    memberTitle: 'محلل نظم',
    avatarImage: 'https://i.pravatar.cc/150?img=22',
    avatarStatus: 'away' as const,
    memberStatus: 'business-trip' as const,
  },
  {
    id: '6',
    memberName: 'ليلى عزيز',
    memberTitle: 'اختصاصية تسويق',
    avatarImage: 'https://i.pravatar.cc/150?img=65',
    avatarStatus: 'active' as const,
    memberStatus: 'remote' as const,
  },
  {
    id: '7',
    memberName: 'هشام سعيد',
    memberTitle: 'مطور واجهات مستخدم',
    avatarImage: 'https://i.pravatar.cc/150?img=68',
    avatarStatus: 'offline' as const,
    memberStatus: 'vacation' as const,
  },
];

const TeamMemberItemDemo = () => {
  const stats = [
    {
      id: 'present',
      titleProps: { text: 'حاضرون اليوم', isTranslated: false },
      value: 5,
      iconName: 'CircleCheckBig' as const,
      intent: 'success' as const,
    },
    {
      id: 'absent',
      titleProps: { text: 'متغيب اليوم', isTranslated: false },
      value: 2,
      iconName: 'CircleMinus' as const,
      intent: 'error' as const,
    },
  ];

  return (
    <View style={styles.container}>
      <TeamMembersSection
        testId="team-demo"
        members={members.map((m) => ({ ...m, onPress: () => {} }))}
        stats={stats}
        headerProps={{
          testId: 'team-demo',
          text: `أعضاء الفريق (${members.length})`,
          isTranslated: false,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  // layout handled inside TeamMembersSection
});

export default TeamMemberItemDemo;
