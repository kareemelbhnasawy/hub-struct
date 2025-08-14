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
  text,
  style,
  ...props
}: BadgeProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  return (
    <View
      testID={`${testId}-badge-${variant}-${color}-${size}`}
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
        {...props}
        text={text}
        style={
          variant == 'number'
            ? [themedStyles.textNumber, themedStyles[color]]
            : [themedStyles[color]]
        }
        size={size}
        weight={'Medium'}
      />
    </View>
  );
};

export default Badge;
