import AvatarProps from './interface';
import { getInitialsFromName } from './utils';
import { View } from 'react-native';
import BaseImage from '../../atoms/base-image';
import { Paragraph } from '@/components/atoms';

const Avatar = ({ testId, size, name, image }: AvatarProps) => {

  return (
    <View testID={`${testId}-avatar`}>
      {image ? (
        <BaseImage
          testId={testId}
          isCircular
          image={image}
          size={size}
        />
      ) : (
        // TODO: Change base Text to Text Component
        <Paragraph
          size={size}
          weight="Bold"
          text={getInitialsFromName(name ?? '')}
        />
      )}
    </View>
  );
};

export default Avatar;
