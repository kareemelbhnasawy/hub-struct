import React from 'react';
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
  const badgeStyles = getBadgeStylesForVariant(variant, size, color, rtl);
  const accessibilityLabel = getAccessibilityLabel(variant, text, color);

  return (
    <BaseText
      {...props}
      testID={`${testId}-badge-${variant}-${color}-${size}`}
      text={text}
      style={[...badgeStyles, style]}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="text"
    />
  );
};

export default Badge;
