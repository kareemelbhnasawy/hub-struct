import { Radius } from '@/style';
import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: Radius.SM,
      borderWidth: 1,
      borderColor: 'borderSecondary',
      backgroundColor: 'backgroundWhite',
    },
  },
  row: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 16,
    },
  },
  textBlock: {
    base: {
      justifyContent: 'flex-start',
    },
  },
  value: {
    base: {
      color: 'foregroundPrimary',
    },
  },
  // Color schemes
  successBg: { base: { backgroundColor: 'backgroundBrandGreenLight' } },
  successFg: { base: { color: 'foregroundSuccess' } },
  errorBg: { base: { backgroundColor: 'backgroundErrorLight' } },
  errorFg: { base: { color: 'foregroundError' } },
  brandBg: { base: { backgroundColor: 'backgroundBrandPrimaryLight' } },
  brandFg: { base: { color: 'foregroundBrandPrimary' } },
  warningBg: { base: { backgroundColor: 'backgroundWarningLight' } },
  warningFg: { base: { color: 'foregroundWarning' } },
  infoBg: { base: { backgroundColor: 'backgroundInfoLight' } },
  infoFg: { base: { color: 'foregroundInfo' } },
  grayBg: { base: { backgroundColor: 'foregroundGrayLight' } },
  grayFg: { base: { color: 'foregroundQuinary' } },
});

export default styles;
