import { View } from 'react-native';
import { LucideIcon, Paragraph } from '@/components/atoms';
import TagProps from './interface';
import { styles } from './styles';
import { getThemeColor } from '@/theme';
import { getIconSize } from './utils';

const Tag = ({
  testId,
  size,
  label,
  hasIcon,
  icon = 'X',
  value,
  onPress,
  containerStyle,
  labelProps,
}: TagProps) => {
  return (
    <View
      testID={`${testId}-tag`}
      style={[styles.wrapper, styles[size], styles.hasGap, containerStyle]}>
      <Paragraph
        testID={`${testId}-tag`}
        text={label}
        size={size}
        style={styles.text}
        {...labelProps}
      />
      {value && (
        <Paragraph
          testID={`${testId}-tag-value`}
          text={value}
          size={size}
          style={styles.text}
        />
      )}
      {hasIcon && (
        <LucideIcon
          onPress={onPress}
          name={icon}
          color={getThemeColor('tagIcon')}
          size={getIconSize(size)}
        />
      )}
    </View>
  );
};

export default Tag;
