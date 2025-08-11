import { icons } from 'lucide-react-native';
import LucideIconProps from './interface';
import { styles } from './styles';
import { View } from 'react-native';
import { s } from '@/theme';

const LucideIcon = ({
  name,
  size = 24,
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
        <LIcon size={s(size)} {...props} />
      </View>
    );
  return <LIcon size={s(size)} {...props} />;
};

export default LucideIcon;
