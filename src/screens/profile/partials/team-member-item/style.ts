import { createThemedStyles } from '@/utilities';

export const styles = createThemedStyles({
  listItemContainer: {
    base: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 16,
      width: '100%',
    },
  },
  isRow: {
    base: {
      flexDirection: 'row',
      columnGap: 10,
      alignItems: 'center',
    },
  },
  isColumn: {
    base: {
      flexDirection: 'column',
    },
  },
  textForegroundSecondary: {
    base: {
      color: 'textTertiary',
    },
  },
});
