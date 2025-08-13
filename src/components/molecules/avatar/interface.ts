import { ImageSourcePropType, TextProps } from 'react-native';

interface AvatarPropsBase extends TextProps {
  testId: string;
  size:  'sm' | 'md' | 'lg' | 'xl';
}

interface AvatarWithName extends AvatarPropsBase {
  name: string;
  image?: string | ImageSourcePropType;
}

interface AvatarWithImage extends AvatarPropsBase {
  name?: string;
  image: string | ImageSourcePropType;
}

type AvatarProps = AvatarWithName | AvatarWithImage;

export default AvatarProps;
