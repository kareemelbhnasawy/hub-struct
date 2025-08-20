import { ButtonSizes } from './interface';
import { primaryDangerStyles, primaryStyles, secondaryDangerStyles, secondaryStyles } from './style';

const getTextSize = (size?: ButtonSizes): 'lg' | 'sm' | 'xs' => {
  switch (size) {
    case 'sm':
      return 'sm';
    case 'md':
      return 'sm';
    case 'lg':
      return 'lg';
    case 'xl':
      return 'xs';
    case 'xxl':
      return 'sm';
    default:
      return 'sm';
  }
};

const getTextType = (size?: ButtonSizes): 'paragraph' | 'headline' => {
  switch (size) {
    case 'sm':
      return 'paragraph';
    case 'md':
      return 'paragraph';
    case 'lg':
      return 'paragraph';
    case 'xl':
      return 'headline';
    case 'xxl':
      return 'headline';
    default:
      return 'paragraph';
  }
};

const getLoaderSize = (size?: ButtonSizes): 16 | 20 | 24 => {
  switch (size) {
    case 'sm':
      return 16;
    case 'md':
      return 16;
    case 'lg':
      return 20;
    case 'xl':
      return 24;
    case 'xxl':
      return 24;
    default:
      return 20;
  }
};

const getButtonStyle = (variant: 'primary' | 'secondary', danger?: boolean) => {
  if (variant === 'primary') {
    return danger ? primaryDangerStyles : primaryStyles;
  }
  return danger ? secondaryDangerStyles : secondaryStyles;
};



export { getTextSize, getTextType, getLoaderSize, getButtonStyle };
