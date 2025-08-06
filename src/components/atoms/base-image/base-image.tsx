import React from 'react';
import { Image } from 'react-native';
import BaseImageProps from './base-image.props';

function BaseImage({
  size,
  roundedImageSize = 0,
  resizeMode = roundedImageSize ? 'cover' : undefined,
  isCircular = false,
  ...imageProps
}: BaseImageProps) {

  return (
    <Image
      className={`${size} ${isCircular ? 'rounded-full' : ''}`}
      resizeMode={resizeMode}
      {...imageProps}
    />
  );
}

export default BaseImage;
