import { icons } from 'lucide-react-native';
import LucideIconProps from './interface';
import styles from './styles';
import { Pressable, View } from 'react-native';
import { DEFAULT_ICON_SIZE } from './constants';
import { scale } from '@/store/theme/utils';
import { useThemeStore } from '@/store/theme';
import { useTranslate } from '@/hooks';

const LucideIcon = ({
  testId,
  name,
  size = DEFAULT_ICON_SIZE,
  isOutline,
  isCircle,
  hasWrapper = false,
  onPress,
  bgColor,
  ...props
}: LucideIconProps) => {
  const LIcon = icons[name];
  const Wrapper = onPress ? Pressable : View;
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const { isRTL } = useTranslate();

  const themedStyle = getThemedStyles(styles(size));

  const iconColor = getThemeColor(bgColor ?? 'transparent');
  const appliedStyles = [
    themedStyle.wrapperBase,
    themedStyle.wrapper,
    isCircle ? themedStyle.circleBackground : null,
    isOutline ? themedStyle.outline : null,
  ];

  // question: should we add onPress to the following condition so icon always
  // has a wrapper if it has an onPress? for better UX

  if (hasWrapper || isCircle || isOutline)
    return (
      <Wrapper
        testID={`${testId}-icon-container`}
        onPress={onPress}
        style={[appliedStyles, { backgroundColor: iconColor }, { transform: [{ scaleX: isRTL ? -1 : 1 }] }]}>
        <LIcon testID={`${testId}-icon`} size={scale(size)} {...props} />
      </Wrapper>
    );
  return (
    <View style={{ transform: [{ scaleX: isRTL ? -1 : 1 }] }}>
      <LIcon size={scale(size)} {...props} onPress={onPress} />
    </View>
  );
};

export default LucideIcon;
