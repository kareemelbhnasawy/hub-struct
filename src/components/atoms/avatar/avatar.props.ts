import { TextProps } from 'react-native';
import { avatarSizes } from './avatar.logic';


interface AvatarProps extends TextProps {
  size: keyof typeof avatarSizes;
  name: string;
  image?: string;
}

export default AvatarProps;
