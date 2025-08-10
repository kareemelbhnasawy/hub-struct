import AvatarProps from './interface';
import { getRelativeAvatarSizes } from './utils';
import { getInitialsFromName } from './utils';
import { View } from 'react-native';
import BaseText from '../../atoms/base-text/base-text.component';
import BaseImage from '../../atoms/base-image';

const Avatar = ({ testId, size, name, image }: AvatarProps) => {
  const [relativeSize, typoSize] = getRelativeAvatarSizes(size);

  return (
    <View
      testID={`${testId}-avatar`}
      className={`flex items-center justify-center bg-secondary-teal-500 rounded-full ${relativeSize} `}>
      {image ? (
        <BaseImage
          testId={testId}
          isCircular
          image={image}
          size={relativeSize}
        />
      ) : (
        // TODO: Change base Text to Text Component
        <BaseText
          text={getInitialsFromName(name ?? '')}
          className={`text-primary-25 dark:text-primary-25 font- typo-size-text-${typoSize}`}
        />
      )}
    </View>
  );
};

export default Avatar;
