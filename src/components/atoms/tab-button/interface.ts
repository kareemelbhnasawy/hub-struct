import { ViewStyle } from 'react-native';
import { icons } from 'lucide-react-native';

export interface TabButtonProps {
  id: string;
  icon: keyof typeof icons;
  isSelected?: boolean;
  onPress: (id: string) => void;
  style?: ViewStyle;
}

export default TabButtonProps;
