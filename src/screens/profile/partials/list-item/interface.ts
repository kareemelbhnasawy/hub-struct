import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';
import { RNStyle } from '@/types/themes';
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
    containerStyle?: RNStyle;
  };
  onPress: () => void;
};
  
export default ListItemProps;
