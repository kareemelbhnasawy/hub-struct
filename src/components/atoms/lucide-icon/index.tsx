import { icons } from 'lucide-react-native';
import LucideIconProps from './interface';
import { styles } from './styles';
import { View } from 'react-native';
import { scale } from '@/theme';
import { DEFAULT_ICON_SIZE } from './constants';

const LucideIcon = ({
  name,
  size = DEFAULT_ICON_SIZE,
  isOutline,
  isCircle,
  hasWrapper = false,
  ...props
}: LucideIconProps) => {
  const LIcon = icons[name];

  const appliedStyles = [
    styles(size)['wrapper-base'],
    styles(size)['wrapper'],
    isCircle ? styles(size)['circle-bg'] : null,
    isOutline ? styles(size)['outline'] : null,
  ];

  if (hasWrapper || isCircle || isOutline)
    return (
      <View style={appliedStyles}>
        <LIcon size={scale(size)} {...props} />
      </View>
    );
  return <LIcon size={scale(size)} {...props} />;
};

export default LucideIcon;
