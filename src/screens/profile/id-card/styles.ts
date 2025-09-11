import { Radius } from '@/style';
import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  backdrop: {
    base: {
      flex: 1,
      backgroundColor: 'alphaBlack40',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  qrCodeContainer: {
    base: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: 'backgroundWhite',
      borderRadius: Radius.MD,
    },
  },
  qrCodeInnerContainer: {
    base: {
      borderWidth: 1,
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderColor: 'foregroundSenary',
      borderRadius: Radius.MD,
    },
  },
});

export default styles;
