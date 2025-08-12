import { ViewStyle } from 'react-native';
import { icons } from 'lucide-react-native';

export interface TabBarItem {
  id: string;
  icon: keyof typeof icons;
  isSelected?: boolean;
}

export interface TabBarProps {
  items: TabBarItem[];
  onTabPress: (tabId: string) => void;
  style?: ViewStyle;
}

export default TabBarProps;
