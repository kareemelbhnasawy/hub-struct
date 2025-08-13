import { getThemedStyleInputType } from '@/store/theme/interface';

const styles: getThemedStyleInputType = {
  wrapper: {
    base: {
      rowGap: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'backgroundWhite',
      width: 60,
    },
  },
  'text-wrapper': {
    base: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  'icon-text': {
    base: {
      textAlign: 'center',
      color: 'textTitle',
    },
  },
};

export default styles;
