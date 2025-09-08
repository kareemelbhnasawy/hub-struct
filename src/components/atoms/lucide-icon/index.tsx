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
  isRTLMirrored = false,
  containerStyle,
  onPress,
  color,
  isFlipped,
  ...props
}: LucideIconProps) => {
  const { getThemeColor } = useThemeStore();
  const iconColor = color ? getThemeColor(color) : undefined;
  const LIcon = icons[name];
  const Wrapper = onPress ? Pressable : View;
  const { getThemedStyles } = useThemeStore();
  const { isRTL } = useTranslate();

  const themedStyle = getThemedStyles(styles(size));

  const appliedStyles = [
    themedStyle.wrapperBase,
    themedStyle.wrapper,
    isCircle ? themedStyle.circleBackground : null,
    isOutline ? themedStyle.outline : null,
    containerStyle,
  ];

  const defaultMirrorValue = isFlipped ? -1 : 1;

  // question: should we add onPress to the following condition so icon always
  // has a wrapper if it has an onPress? for better UX

  if (hasWrapper || isCircle || isOutline)
    return (
      <Wrapper
        testID={`${testId}-icon-container`}
        onPress={onPress}
        style={[
          appliedStyles,
          {
            transform: [
              {
                scaleX:
                  isRTLMirrored && isRTL
                    ? -defaultMirrorValue
                    : defaultMirrorValue,
              },
            ],
          },
        ]}>
        <LIcon
          testID={`${testId}-icon`}
          size={scale(size)}
          color={iconColor}
          {...props}
        />
      </Wrapper>
    );
  return (
    <View
      style={{
        transform: [
          {
            scaleX:
              isRTLMirrored && isRTL ? -defaultMirrorValue : defaultMirrorValue,
          },
        ],
      }}>
      <LIcon
        size={scale(size)}
        color={iconColor}
        onPress={onPress}
        {...props}
      />
    </View>
  );
};

export default LucideIcon;
