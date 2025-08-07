import { icons } from 'lucide-react-native';
import { scale } from 'react-native-size-matters';
import LucideIconProps from './interface';

const LucideIcon = ({ name, size = 24, ...props }: LucideIconProps) => {
  const LIcon = icons[name];

  return <LIcon size={scale(size)} {...props} />;
};

export default LucideIcon;
