import { getThemedStyleInputType } from '@/store/theme/interface';

export const styles: getThemedStyleInputType = {
  wrapper: {
    base: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      width: 'auto',
      backgroundColor: 'tagBackground',
      borderColor: 'tagBorder',
      borderWidth: 0.5,
      borderRadius: 10,
    },
  },
  sm: {
    base: {
      height: 23,
      borderRadius: 6,
      paddingVertical: 5,
      paddingHorizontal: 15,
    },
  },
  md: {
    base: {
      height: 28,
      borderRadius: 8,
      paddingVertical: 5,
      paddingHorizontal: 17,
    },
  },
  lg: {
    base: {
      height: 36,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
  },
  text: {
    base: {
      color: 'tagLabel',
    },
  },
  hasGap: {
    base: {
      gap: 15,
    },
  },
};
