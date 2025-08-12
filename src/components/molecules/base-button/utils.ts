import { ButtonSizes } from './interface';

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

export { getTextSize, getTextType };
