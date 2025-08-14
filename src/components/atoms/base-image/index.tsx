import React from 'react';
import { Image } from 'react-native';
import BaseImageProps from './interface';
import { styles } from './styles';

const BaseImage = ({
  testID,
  image,
  roundedImageSize = 0,
  resizeMode = roundedImageSize ? 'cover' : undefined,
  isCircular = false,
  ...imageProps
}: BaseImageProps) => {
  return (
    <Image
      testID={`${testID}-image`}
      style={[
        styles.fullSize,
        isCircular && styles.roundedFull,
        imageProps.style,
      ]}
      resizeMode={resizeMode}
      source={typeof image === 'string' ? { uri: image } : image}
      {...imageProps}
    />
  );
};

export default BaseImage;
