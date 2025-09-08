import { createThemedStyles } from '@/utilities';
import { Dimensions } from 'react-native';

const styles = createThemedStyles({
  emptyComponentContainer: {
    base: {
      alignItems: 'center',
      alignContent: 'center',
      paddingHorizontal: 32,
      rowGap: 16,
      flex: 1,
      minHeight: Dimensions.get('window').height - 300,
      justifyContent: 'center',
      margin: 'auto',
      width: '90%'
    },
  },
  textAlignCenter: {
    base: {
      textAlign: 'center',
    },
  },
  alignSelfCenter: {
    base: {
      alignSelf: 'center',
    },
  },
  loadMoreSpinnerStyle: {
    base: {
      alignSelf: 'center',
      paddingTop: 10,
    },
  },
});

export default styles;
