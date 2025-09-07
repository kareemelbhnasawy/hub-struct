interface TeamMemberItemProps {
  testId: string;
  memberName: string;
  memberTitle: string;
  memberStatus?: memberStatusType;
  avatarImage?: string;
  onPress: () => void;
}

export type TeamMemberItemDataType = {
  id: string;
  memberName: string;
  memberTitle: string;
  memberStatus?: memberStatusType;
  avatarImage?: string;
  onPress: () => void;
};

export type memberStatusType = 'remote' | 'vacation' | 'business-trip' | 'academic-vacation';
export default TeamMemberItemProps;
