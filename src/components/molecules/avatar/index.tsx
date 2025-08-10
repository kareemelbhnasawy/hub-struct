import React from 'react';
import AvatarProps from './interface';
import { getRelativeAvatarSizes } from './utils';
import { getInitialsFromName } from './utils';
import { View } from 'react-native';
import BaseText from '../../atoms/base-text/base-text.component';
import BaseImage from '../../atoms/base-image';
import { styles } from './styles';
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
        <BaseText
          text={getInitialsFromName(name ?? '')}
          style={[styles.textWhite, styles[fontSize as keyof typeof styles]]}
        />
      )}
    </View>
  );
};

export default Avatar;
