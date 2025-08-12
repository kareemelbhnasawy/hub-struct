import { BadgeVariant, BadgeSize, BadgeColor } from './interface';
import { styles } from './style';

export const getBadgeStylesForVariant = (
  variant: BadgeVariant,
  size: BadgeSize,
  color: BadgeColor,
  rtl: boolean,
) => {
  const baseStyles = [styles.badge, styles[variant]];

  // Add color styles - handle gray difference for numbers vs labels
  if (color === 'gray' && variant === 'number') {
    baseStyles.push(styles.grayNumber);
  } else {
    baseStyles.push(styles[color]);
  }

  // Add size-specific styles
  if (variant === 'number') {
    switch (size) {
      case 'sm':
        baseStyles.push(styles.numberSm);
        break;
      case 'md':
        baseStyles.push(styles.numberMd);
        break;
      case 'lg':
        baseStyles.push(styles.numberLg);
        break;
    }
  } else {
    baseStyles.push(styles[size]);
  }

  // Add RTL/LTR styles
  if (rtl) {
    baseStyles.push(styles.rtl);
  } else {
    baseStyles.push(styles.ltr);
  }

  return baseStyles;
};

export const getAccessibilityLabel = (
  variant: BadgeVariant,
  text: string,
  color: BadgeColor,
): string => {
  const colorLabel = color === 'brand' ? 'primary' : color;

  if (variant === 'number') {
    return `${colorLabel} badge with number ${text}`;
  } else {
    return `${colorLabel} badge with label ${text}`;
  }
};
