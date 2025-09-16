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
  textBrandTealParagraph: {
    base: { 
        color: 'textBrandTeal' 
    }
  },
  textDefaultParagraph: {
    base: { 
        color: 'textDefault' 
    }
  },
});
