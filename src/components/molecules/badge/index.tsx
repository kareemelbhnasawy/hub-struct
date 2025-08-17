import React from 'react';
import { View } from 'react-native';
import BadgeProps from './interface';
import { Paragraph } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';
import styles from './styles';

const Badge = ({
  testId,
  variant,
  color = 'brand',
  size = 'md',
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
