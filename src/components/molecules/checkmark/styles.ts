import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 10,
    },
  },
  checkmark: {
    base:{
      borderRadius: 7,
      borderWidth: 1,
      borderColor: 'borderPrimary',
      width: 20,
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  checked: {
    base: {
      backgroundColor: 'backgroundSuccess',
    }
  }
});

export default styles;
