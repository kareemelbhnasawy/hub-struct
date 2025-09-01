import { RNStyle } from '@/types/themes';
import { ImageSourcePropType, TextProps } from 'react-native';

interface AvatarPropsBase extends Omit<TextProps, 'testID'> {
  testId: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  containerStyle?: RNStyle;
  status?: 'active' | 'away' | 'offline';
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
