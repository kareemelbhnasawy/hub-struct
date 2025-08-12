import React from 'react';
import { View } from 'react-native';
import BaseText from '../../atoms/base-text';
import BadgeProps from './interface';
import { getBadgeStylesForVariant, getAccessibilityLabel } from './utils';

const Badge = ({
  testId,
  variant,
  color = 'brand',
  size = 'md',
  rtl = false,
  text,
  style,
  ...props
}: BadgeProps) => {
  const { containerStyle, textStyle } = getBadgeStylesForVariant(
    variant,
    size,
    color,
    rtl,
  );
  const accessibilityLabel = getAccessibilityLabel(variant, text, color);

  return (
    <View
      testID={`${testId}-badge-${variant}-${color}-${size}`}
      style={[containerStyle, style]}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="text">
      <BaseText {...props} text={text} style={textStyle} isTranslated={false} />
    </View>
  );
};

export default Badge;
