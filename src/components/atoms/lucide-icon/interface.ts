import { icons, LucideProps } from 'lucide-react-native';

interface LucideIconProps extends LucideProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

export default LucideIconProps;
