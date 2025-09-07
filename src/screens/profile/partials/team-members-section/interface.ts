import { RNStyle } from '@/types/themes';
import HeadlineProps from '@/components/atoms/typography/headline/interface';
import { ParagraphProps } from '@/components/atoms/typography/paragraph/interface';
import { icons } from 'lucide-react-native';
import { StatIntent } from '@/components/molecules/stat-card/interface';
import { TeamMemberItemDataType } from '../team-member-item/interface';

export type TeamStatItem = {
  id: string;
  titleProps: ParagraphProps;
  value: string | number;
  iconName: keyof typeof icons;
  intent?: StatIntent;
};

interface TeamMembersSectionProps {
  testId: string;
  members: TeamMemberItemDataType[];
  stats?: TeamStatItem[];
  headerProps?: HeadlineProps; // optional header above the list
  containerStyle?: RNStyle;
  listContainerStyle?: RNStyle;
}

export default TeamMembersSectionProps;

