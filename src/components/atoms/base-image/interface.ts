import { ImageProps, ImageSourcePropType } from 'react-native';

interface BaseImageProps extends ImageProps {
  testId: string;
  size: string;
  image: string | ImageSourcePropType;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  roundedImageSize?: number;
  isCircular?: boolean;
}

export default BaseImageProps;
