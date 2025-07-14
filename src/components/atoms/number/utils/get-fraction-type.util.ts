import {Headline, Paragraph} from '_components/atoms';
import TypographySizes from '../../constants/typography-sizes.constant';

export const getFractionType = (size: TypographySizes) => {
  if (
    size === TypographySizes['3XL'] ||
    size === TypographySizes['2XL'] ||
    size === TypographySizes.XL
  ) {
    return Headline;
  }
  return Paragraph;
};
