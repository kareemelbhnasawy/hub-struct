import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  row: {
    base: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
    },
  },
  valueText: {
    base: {
      maxWidth: '60%',
      overflow: 'hidden',
    },
  },
});

export default styles;
