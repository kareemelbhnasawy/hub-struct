import { icons } from 'lucide-react-native';

export interface GlassIconProps {
  testId: string;
  name: keyof typeof icons;
  onPress: () => void;
}
