import { ImageProps } from 'react-native';

interface BaseImageProps extends ImageProps {
    size: string;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    roundedImageSize?: number;
    isCircular?: boolean; // Optional prop to indicate if the image should be circular
}

export default BaseImageProps;
