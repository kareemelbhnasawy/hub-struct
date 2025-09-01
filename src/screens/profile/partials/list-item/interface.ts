import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';
import { themeColors } from '@/theme/theme-colors';
import { icons } from 'lucide-react-native';

interface ListItemProps {
  testId: string;
  textProps: Omit<HeadlineProps, 'testId'>;
  iconProps: Omit<LucideIconProps, 'testId'>;
  onPress: () => void;
}

export type listItemDataType = {
  id: string;
  title: string;
  iconProps: {
    name: keyof typeof icons;
    bgColor: keyof typeof themeColors;
  };
  onPress: () => void;
};
  
export default ListItemProps;
