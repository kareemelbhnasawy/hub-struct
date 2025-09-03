import { View } from 'react-native';
import BadgeProps from './interface';
import { LucideIcon, Paragraph } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';
import styles from './styles';

const Badge = ({
  testId,
  variant = 'label',
  color = 'brand',
  size = 'md',
  iconProps,
  paragraphProps,
  style,
}: BadgeProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  return (
    <View
      testID={`${testId}-badge-container`}
      style={
        variant == 'number'
          ? [
              themedStyles.badgeContainer,
              themedStyles.containerNumber,
              themedStyles[color],
              style,
            ]
          : [
              themedStyles.badgeContainer,
              themedStyles[size],
              themedStyles[color],
              style,
            ]
      }
      accessibilityRole="text">
      {iconProps && (
        <LucideIcon
        testId={`${testId}-icon`}
        size={16}
        {...iconProps}
        />
      )}
      <Paragraph
        style={
          variant == 'number'
            ? [themedStyles.textNumber, themedStyles[color]]
            : [themedStyles[color]]
        }
        size={size}
        weight="Medium"
        {...paragraphProps}
        testId={`${testId}-badge`}
      />
    </View>
  );
};

export default Badge;
