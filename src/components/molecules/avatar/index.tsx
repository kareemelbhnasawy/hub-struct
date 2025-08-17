import AvatarProps from './interface';
import { getInitialsFromName } from './utils';
import { View } from 'react-native';
import BaseImage from '../../atoms/base-image';
import { styles } from './styles';
import { Paragraph } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';

const Avatar = ({ testId, size, name, image, containerStyle }: AvatarProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  return (
    <View
      testID={`${testId}-avatar-container`}
      style={[
        themedStyles.flex,
        themedStyles.itemsCenter,
        themedStyles.justifyCenter,
        themedStyles.roundedFull,
        themedStyles.bgIconBackgroundDefault,
        themedStyles[size],
        containerStyle,
      ]}>
      {image ? (
        <BaseImage testId={`${testId}-avatar`} isCircular image={image} />
      ) : (
        <Paragraph
          testId={`${testId}-avatar`}
          size={size}
          weight="Bold"
          text={getInitialsFromName(name ?? '')}
          style={themedStyles.textWhite}
        />
      )}
    </View>
  );
};

export default Avatar;
