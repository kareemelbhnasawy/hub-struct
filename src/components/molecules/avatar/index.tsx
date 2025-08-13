import React from 'react';
import AvatarProps from './interface';
import { getInitialsFromName } from './utils';
import { View } from 'react-native';
import BaseImage from '../../atoms/base-image';
import { styles } from './styles';
import { Paragraph } from '@/components/atoms';

const Avatar = ({ testId, size, name, image }: AvatarProps) => {

  return (
    <View
      testID={`${testId}-avatar`}
      style={[
        styles.flex,
        styles.itemsCenter,
        styles.justifyCenter,
        styles.roundedFull,
        styles.bgIconBackgroundDefault,
        styles[size],
      ]}>
      {image ? (
        <BaseImage
          testId={testId}
          isCircular
          image={image}
          size={size}
        />
      ) : (
        <Paragraph
          size={size}
          weight="Bold"
          text={getInitialsFromName(name ?? '')}
          style={styles.textWhite}
        />
      )}
    </View>
  );
};

export default Avatar;
