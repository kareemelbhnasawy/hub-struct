import React from 'react';
import AvatarProps from './interface';
import { getRelativeAvatarSizes } from './utils';
import { getInitialsFromName } from './utils';
import { View } from 'react-native';
import BaseImage from '../../atoms/base-image';
import { styles } from './styles';
import { Paragraph } from '@/components/atoms';
const Avatar = ({ testId, size, name, image }: AvatarProps) => {
  const [relativeSize, fontSize] = getRelativeAvatarSizes(size);

  return (
    <View
      testID={`${testId}-avatar`}
      style={[
        styles.flex,
        styles.itemsCenter,
        styles.justifyCenter,
        styles.roundedFull,
        styles.bgIconBackgroundDefault,
        styles[relativeSize as keyof typeof styles],
      ]}>
      {image ? (
        <BaseImage testId={testId} isCircular image={image} />
      ) : (
        // TODO: Change base Text to Text Component
        <Paragraph
          size={typoSize}
          weight="Bold"
          text={getInitialsFromName(name ?? '')}
          style={[styles.textWhite, styles[fontSize as keyof typeof styles]]}
        />
      )}
    </View>
  );
};

export default Avatar;
