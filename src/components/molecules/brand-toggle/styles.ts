import { getThemedStyleInputType } from '@/store/theme/interface';

export const styles: getThemedStyleInputType = {
  container: {
    base: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      paddingVertical: 16,
    },
  },
  contentContainer: {
    base: {
      flex: 1,
      marginStart: 16,
    },
  },
  description: {
    base: {
      color: 'textToggleTitle',
      fontSize: 12,
      marginTop: 4,
    },
  },
  title: {
    base: {
      color: 'textToggleTitle',
      fontSize: 14,
    },
  },
};
