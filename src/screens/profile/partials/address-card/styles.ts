import { Radius } from '@/style';
import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  cardContainer: {
    base: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderRadius: Radius.SM,
      borderWidth: 1,
      borderColor: 'borderNeutralSecondary',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  cardContainerFocused: {
    base: {
      borderColor: 'borderPrimary',
    },
  },
  centerRow: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
});

export default styles;
