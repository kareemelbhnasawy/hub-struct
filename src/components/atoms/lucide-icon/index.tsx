import { icons } from 'lucide-react-native';
import LucideIconProps from './interface';
import styles from './styles';
import { View } from 'react-native';
import { DEFAULT_ICON_SIZE } from './constants';
import { scale } from '@/store/theme/utils';
import { useThemeStore } from '@/store/theme';

const LucideIcon = ({
  name,
  size = DEFAULT_ICON_SIZE,
  isOutline,
  isCircle,
  hasWrapper = false,
  ...props
}: LucideIconProps) => {
  const LIcon = icons[name];

  const { getThemedStyles } = useThemeStore();

  const themedStyle = getThemedStyles(styles(size));

  const appliedStyles = [
    themedStyle['wrapper-base'],
    themedStyle['wrapper'],
    isCircle ? themedStyle['circle-bg'] : null,
    isOutline ? themedStyle['outline'] : null,
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
