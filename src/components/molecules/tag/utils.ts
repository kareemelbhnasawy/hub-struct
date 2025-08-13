export const getIconSize = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 12;
    case 'medium':
      return 16;
    case 'large':
      return 20;
    default:
      return 16;
  }
};

export const getAbbreviatedSize = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 'sm';
    case 'medium':
      return 'md';
    case 'large':
      return 'lg';
    default:
      return 'sm';
  }
};
