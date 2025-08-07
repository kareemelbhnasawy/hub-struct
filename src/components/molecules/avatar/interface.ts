import { ImageSourcePropType, TextProps } from 'react-native';
import { avatarSizes } from './utils';

interface AvatarPropsBase extends TextProps {
  testId: string;
  size: keyof typeof avatarSizes;
};

interface AvatarWithName extends AvatarPropsBase {
  name: string;
  image?: string | ImageSourcePropType;
};

interface AvatarWithImage extends AvatarPropsBase {
  name?: string;
  image: string | ImageSourcePropType;
};

type AvatarProps = AvatarWithName | AvatarWithImage;

export default AvatarProps;
