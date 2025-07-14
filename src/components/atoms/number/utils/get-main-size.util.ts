import TypographySizes from '../../constants/typography-sizes.constant';

export const getMainSize = (size: TypographySizes) => {
  switch (size) {
    case TypographySizes['3XL']:
      return TypographySizes.XL;
    case TypographySizes['2XL']:
      return TypographySizes.M;
    case TypographySizes.XL:
      return TypographySizes.S;
    case TypographySizes.L:
      return TypographySizes.XS;
    case TypographySizes.M:
      return TypographySizes.XL;
    case TypographySizes.S:
      return TypographySizes.L;
    case TypographySizes.XS:
      return TypographySizes.M;
    case TypographySizes['2XS']:
      return TypographySizes.S;
    default:
      return TypographySizes.S;
  }
};
