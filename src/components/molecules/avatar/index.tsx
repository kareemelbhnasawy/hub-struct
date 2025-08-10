import AvatarProps from './interface';
import { getRelativeAvatarSizes } from './utils';
import { getInitialsFromName } from './utils';
import { View } from 'react-native';
import BaseImage from '../../atoms/base-image';
import { Paragraph } from '@/components/atoms';

const Avatar = ({ testId, size, name, image }: AvatarProps) => {
  const [relativeSize, typoSize] = getRelativeAvatarSizes(size);

  return (
    <View testID={`${testId}-avatar`}>
      {image ? (
        <BaseImage
          testId={testId}
          isCircular
          image={image}
          size={relativeSize}
        />
      ) : (
        // TODO: Change base Text to Text Component
        <Paragraph
          size={typoSize}
          weight="Bold"
          text={getInitialsFromName(name ?? '')}
        />
      )}
    </View>
  );
};

export default Avatar;
