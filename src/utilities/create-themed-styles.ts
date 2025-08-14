import { GetThemedStyleInputType } from '@/types/themes';

const createThemedStyles = <T extends GetThemedStyleInputType>(styles: T) => {
  return styles;
};

export default createThemedStyles;
