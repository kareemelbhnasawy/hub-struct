import { icons } from 'lucide-react-native';
import LucideIconProps from './interface';
import styles from './styles';
import { View } from 'react-native';
import { DEFAULT_ICON_SIZE } from './constants';
import { scale } from '@/store/theme/utils';
import { useThemeStore } from '@/store/theme';

const LucideIcon = ({
  testId,
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
    themedStyle.wrapperBase,
    themedStyle.wrapper,
    isCircle ? themedStyle.circleBackground : null,
    isOutline ? themedStyle.outline : null,
  ];

  if (hasWrapper || isCircle || isOutline)
    return (
      <View testID={`${testId}-icon-container`} style={appliedStyles}>
        <LIcon testID={`${testId}-icon`} size={scale(size)} {...props} />
      </View>
    );
  return <LIcon size={scale(size)} {...props} />;
};

export default LucideIcon;
