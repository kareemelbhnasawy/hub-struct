import React from 'react';
import { View } from 'react-native';
import BadgeProps from './interface';
import { getBadgeStylesForVariant, getAccessibilityLabel } from './utils';
import { Paragraph } from '@/components/atoms';

const Badge = ({
  testId,
  variant,
  color = 'brand',
  size = 'md',
  text,
  style,
  ...props
}: BadgeProps) => {
  const { containerStyle, textStyle } = getBadgeStylesForVariant(
    variant,
    size,
    color,
  );
  const accessibilityLabel = getAccessibilityLabel(variant, text, color);

  return (
    <View
      testID={`${testId}-badge-${variant}-${color}-${size}`}
      style={[containerStyle, style]}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="text">
      <Paragraph
        {...props}
        text={text}
        style={textStyle}
        size={size}
        weight={'Medium'}
      />
    </View>
  );
};

export default Badge;
