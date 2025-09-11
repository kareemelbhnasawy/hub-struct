export const getIconSize = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 8;
    case 'md':
      return 12;
    case 'lg':
      return 14;
    default:
      return 10;
  }
};
