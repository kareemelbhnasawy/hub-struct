import { icons } from 'lucide-react-native';
import LucideIconProps from './interface';
import styles from './styles';
import { Pressable, View } from 'react-native';
import { DEFAULT_ICON_SIZE } from './constants';
import { scale } from '@/store/theme/utils';
import { useThemeStore } from '@/store/theme';

const LucideIcon = ({
  name,
  size = DEFAULT_ICON_SIZE,
  isOutline,
  isCircle,
  hasWrapper = false,
  onPress,
  ...props
}: LucideIconProps) => {
  const LIcon = icons[name];
  const Wrapper = onPress ? Pressable : View;
  const { getThemedStyles } = useThemeStore();

  const themedStyle = getThemedStyles(styles(size));

  const appliedStyles = [
    themedStyle['wrapper-base'],
    themedStyle['wrapper'],
    isCircle ? themedStyle['circle-bg'] : null,
    isOutline ? themedStyle['outline'] : null,
  ];

  // question: should we add onPress to the following condition so icon always
  // has a wrapper if it has an onPress? for better UX

  if (hasWrapper || isCircle || isOutline)
    return (
      <Wrapper onPress={onPress} style={appliedStyles}>
        <LIcon size={scale(size)} {...props} />
      </Wrapper>
    );
  return <LIcon size={scale(size)} {...props} onPress={onPress} />;
};

export default LucideIcon;
