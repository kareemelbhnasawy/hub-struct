import { Image } from 'react-native';
import BaseImageProps from './interface';
import { styles } from './styles';
import { useThemeStore } from '@/store/theme';

const BaseImage = ({
  testId,
  image,
  roundedImageSize = 0,
  resizeMode = roundedImageSize ? 'cover' : undefined,
  isCircular = false,
  ...imageProps
}: BaseImageProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  return (
    <Image
      testID={`${testId}-image`}
      style={[
        themedStyles.fullSize,
        isCircular && themedStyles.roundedFull,
        imageProps.style,
      ]}
      resizeMode={resizeMode}
      source={typeof image === 'string' ? { uri: image } : image}
      {...imageProps}
    />
  );
};

export default BaseImage;
