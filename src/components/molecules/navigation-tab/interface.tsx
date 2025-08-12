import { icons } from 'lucide-react-native';

export interface NavigationTabProps {
  icon: keyof typeof icons;
  isNews?: boolean;
  isMiddleTab?: boolean;
}
