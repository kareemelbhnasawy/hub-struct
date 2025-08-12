import { ViewStyle } from 'react-native';
import { icons } from 'lucide-react-native';

export interface TabBarItem {
  id: string;
  icon: keyof typeof icons;
}

export interface TabBarProps {
  items: TabBarItem[];
  selectedTabId: string;
  onTabPress: (tabId: string) => void;
  style?: ViewStyle;
}

export default TabBarProps;
