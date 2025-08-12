import { BadgeVariant, BadgeSize, BadgeColor } from './interface';
import { styles } from './style';

export const getBadgeStylesForVariant = (
  variant: BadgeVariant,
  size: BadgeSize,
  color: BadgeColor,
  rtl: boolean,
) => {
  // Container styles
  const containerStyles = [styles.badgeContainer];

  // Add variant-specific container styles
  if (variant === 'number') {
    containerStyles.push(styles.containerNumber);
  } else {
    containerStyles.push(styles.containerLabel);

    // Add size-specific border radius for labels
    switch (size) {
      case 'sm':
        containerStyles.push(styles.containerLabelSm);
        break;
      case 'md':
        containerStyles.push(styles.containerLabelMd);
        break;
      case 'lg':
        containerStyles.push(styles.containerLabelLg);
        break;
    }
  }

  // Add background color styles
  switch (color) {
    case 'brand':
      containerStyles.push(styles.backgroundBrand);
      break;
    case 'success':
      containerStyles.push(styles.backgroundSuccess);
      break;
    case 'warning':
      containerStyles.push(styles.backgroundWarning);
      break;
    case 'error':
      containerStyles.push(styles.backgroundError);
      break;
    case 'gray':
      containerStyles.push(styles.backgroundGray);
      break;
  }

  // Text styles
  const textStyles = [styles.text];

  // Add variant-specific text styles
  if (variant === 'number') {
    textStyles.push(styles.textNumber);
  } else {
    textStyles.push(styles.textLabel);
  }

  // Add size-specific text styles
  if (variant === 'number') {
    switch (size) {
      case 'sm':
        textStyles.push(styles.textNumberSm);
        break;
      case 'md':
        textStyles.push(styles.textNumberMd);
        break;
      case 'lg':
        textStyles.push(styles.textNumberLg);
        break;
    }
  } else {
    switch (size) {
      case 'sm':
        textStyles.push(styles.textSm);
        break;
      case 'md':
        textStyles.push(styles.textMd);
        break;
      case 'lg':
        textStyles.push(styles.textLg);
        break;
    }
  }

  // Add RTL/LTR text styles
  if (rtl) {
    textStyles.push(styles.textRtl);
  } else {
    textStyles.push(styles.textLtr);
  }

  // Add text color styles
  switch (color) {
    case 'brand':
      textStyles.push(styles.textColorBrand);
      break;
    case 'success':
      textStyles.push(styles.textColorSuccess);
      break;
    case 'warning':
      textStyles.push(styles.textColorWarning);
      break;
    case 'error':
      textStyles.push(styles.textColorError);
      break;
    case 'gray':
      textStyles.push(styles.textColorGray);
      break;
  }

  return {
    containerStyle: containerStyles,
    textStyle: textStyles,
  };
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
