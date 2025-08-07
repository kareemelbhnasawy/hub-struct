import { TextProps } from 'react-native';
import { avatarSizes } from './utils';

interface AvatarPropsBase extends TextProps {
  testId: string;
  size: keyof typeof avatarSizes;
};

type AvatarWithName = AvatarPropsBase & {
  name: string;
  image?: string;
};

type AvatarWithImage = AvatarPropsBase & {
  name?: string;
  image: string;
};

type AvatarProps = AvatarWithName | AvatarWithImage;

export default AvatarProps;
