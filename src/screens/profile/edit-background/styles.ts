import { createThemedStyles } from '@/utilities';

export default createThemedStyles({
  container: {
    base: {
      flex: 1,
    },
  },
  itemWrapper: {
    base: {
      width: 150,
      height: 100,
      borderRadius: 8,
      overflow: 'hidden',
    },
  },
  image: {
    base: {
      width: '100%',
      height: '100%',
    },
  },
  selected: {
    base: {
      borderColor: 'borderSuccessLight',
      borderWidth: 4,
    },
  },
  gap: { base: { gap: 16 } },
  blurView: {
    base: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'alphaBlack50',
    },
  },
});
