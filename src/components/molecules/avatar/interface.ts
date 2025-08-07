import { ImageSourcePropType, TextProps } from 'react-native';
import { avatarSizes } from './utils';

type AvatarPropsBase = TextProps & {
  size: keyof typeof avatarSizes;
};

type AvatarWithName = AvatarPropsBase & {
  name: string;
  image?: string | ImageSourcePropType;
};

type AvatarWithImage = AvatarPropsBase & {
  name?: string;
  image: string | ImageSourcePropType;
};

type AvatarProps = AvatarWithName | AvatarWithImage;

export default AvatarProps;
