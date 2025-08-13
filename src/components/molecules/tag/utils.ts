export const getIconSize = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 12;
    case 'md':
      return 16;
    case 'lg':
      return 20;
    default:
      return 16;
  }
};
