import { createThemedStyles } from '@/utilities';
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const HORIZONTAL_PADDING = 16;
const CONTENT_WIDTH = SCREEN_WIDTH - HORIZONTAL_PADDING * 2;

export default createThemedStyles({
  container: {
    base: {
      flex: 1,
    },
  },
  columnWrapper: {
    base: {
      gap: 16,
    },
  },
  imageContainer: {
    base: {
      width: CONTENT_WIDTH / 2.5,
      aspectRatio: 4 / 3,
      overflow: 'hidden',
      borderRadius: 8,
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
  blurView: {
    base: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'alphaBlack50',
    },
  },
  alignItems: {
    base: {
      width: '100%',
    },
  },
});
