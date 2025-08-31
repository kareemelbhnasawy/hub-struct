import { createThemedStyles } from '@/utilities';

export const styles = createThemedStyles({
  listItemContainer: {
    base: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 8,
      width: '100%',
    },
  },
});
