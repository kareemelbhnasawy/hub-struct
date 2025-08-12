import React from 'react';
import { Image } from 'react-native';
import BaseImageProps from './interface';
import { styled } from 'nativewind';

const StyledImage = styled(Image);

const BaseImage = ({
  testID,
  size,
  image,
  roundedImageSize = 0,
  resizeMode = roundedImageSize ? 'cover' : undefined,
  isCircular = false,
  ...imageProps
}: BaseImageProps) => {
  return (
    <StyledImage
      testID={`${testID}-image`}
      className={`${size} ${isCircular ? 'rounded-full' : ''}`}
      resizeMode={resizeMode}
      source={typeof image === 'string' ? { uri: image } : image}
      {...imageProps}
    />
  );
};

export default BaseImage;
