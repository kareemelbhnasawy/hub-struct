import React from 'react';
import { Image, StyleSheet } from 'react-native';
import BaseImageProps from './interface';

const BaseImage = ({
  testID,
  image,
  roundedImageSize = 0,
  resizeMode = roundedImageSize ? 'cover' : undefined,
  isCircular = false,
  style,
  ...imageProps
}: BaseImageProps) => {
  const imageStyle = [
    style,
    isCircular ? styles.circular : null,
    roundedImageSize ? { borderRadius: roundedImageSize } : null,
  ].filter(Boolean);

  return (
    <Image
      testID={`${testID}-image`}
      style={imageStyle}
      resizeMode={resizeMode}
      source={typeof image === 'string' ? { uri: image } : image}
      {...imageProps}
    />
  );
};

const styles = StyleSheet.create({
  circular: {
    borderRadius: 9999,
  },
});

export default BaseImage;
