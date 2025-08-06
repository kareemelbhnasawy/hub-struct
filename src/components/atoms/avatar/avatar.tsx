import AvatarProps from './avatar.props';
import { getRelativeAvatarSizes } from './avatar.logic';
import { getInitialsFromName } from './avatar.logic';
import { View } from 'react-native';
import BaseText from '../base-text/base-text.component';
import BaseImage from '../base-image/base-image';

function Avatar({ size, name, image }: AvatarProps) {
  const [relativeSize, typoSize] = getRelativeAvatarSizes(size);
  console.log('Avatar size:', relativeSize, 'Typo size:', typoSize);
  return (
    <View
      className={`flex items-center justify-center bg-secondary-teal-500 rounded-full ${relativeSize} `}
    >
      {image ? (
        <BaseImage
          isCircular
          source={{ uri: image }}
          size= {relativeSize}
        />
      ) : (
        <BaseText
          text={getInitialsFromName(name)}
          className={`text-primary-25 dark:text-primary-25 font- typo-size-text-${typoSize}`}
        />
      )}
    </View>
  );
}

export default Avatar;
