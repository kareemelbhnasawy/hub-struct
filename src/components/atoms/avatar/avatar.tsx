import AvatarProps from './avatar.props';
import { avatarSizes, getRelativeAvatarSizes } from './avatar.logic';
import { getInitialsFromName } from './avatar.logic';
import { View, Image, Text } from 'react-native';
import BaseText from '../base-text/base-text.component';

function Avatar({ size, name, image }: AvatarProps) {
  const [relativeSize, typoSize] = getRelativeAvatarSizes(size);
  console.log('Avatar size:', relativeSize, 'Typo size:', typoSize);
  return (
    <View
      className={`flex items-center justify-center bg-secondary-teal-500 rounded-full ${relativeSize} `}
    >
      {image ? (
        <Image
          className="rounded-full"
          source={{ uri: image }}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
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
