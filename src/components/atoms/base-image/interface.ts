import { ImageProps, ImageSourcePropType } from 'react-native';

interface BaseImageProps extends Omit<ImageProps, 'testID'> {
  testId: string;
  image: string | ImageSourcePropType;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  roundedImageSize?: number;
  isCircular?: boolean;
}

export default BaseImageProps;
