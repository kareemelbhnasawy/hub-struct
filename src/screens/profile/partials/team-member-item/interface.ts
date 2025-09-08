interface TeamMemberItemProps {
  testId: string;
  memberName: string;
  memberTitle: string;
  memberStatus?: memberStatusType;
  avatarImage?: string;
  avatarStatus?: 'Online' | 'Away' | 'Offline';
  onPress: () => void;
}

export type TeamMemberItemDataType = {
  id: string;
  memberName: string;
  memberTitle: string;
  memberStatus?: memberStatusType;
  avatarImage?: string;
  avatarStatus?: 'Online' | 'Away' | 'Offline';
  onPress: () => void;
};

export type memberStatusType =
  | 'remote'
  | 'vacation'
  | 'business-trip'
  | 'academic-vacation'
  | 'In Vacation'
  | 'From home';
export default TeamMemberItemProps;
