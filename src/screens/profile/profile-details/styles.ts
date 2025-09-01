import { Radius } from '@/style';
import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  buttonText: {
    base: {
      color: 'buttonPrimaryDefaultLabel',
      fontSize: 16,
      fontWeight: '600',
    },
  },
  warningContainer: {
    base: {
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical: 8,
      borderRadius: Radius.SM,
      backgroundColor: 'backgroundWarningLight',
    },
  },
  iconContainer: {
    base: {
      backgroundColor: 'backgroundBrandOrangeLight',
    },
  },
});

export default styles;