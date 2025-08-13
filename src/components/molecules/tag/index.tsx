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
  icon,
  value,
  containerStyle,
}: TagProps) => {
  const hasValueOrIcon = value || icon;
  return (
    <View
      testID={`${testId}-tag`}
      style={[styles.wrapper, styles[size], containerStyle]}>
      <Paragraph
        testID={`${testId}-tag`}
        text={label}
        style={[
          hasValueOrIcon && styles.hasMarginEnd,
          styles.text,
          styles[`${size}Text`],
        ]}
      />
      {value && (
        <Paragraph
          testID={`${testId}-tag-value`}
          text={value}
          style={[
            icon && styles.hasMarginEnd,
            styles.text,
            styles[`${size}Text`],
          ]}
        />
      )}
      {icon && (
        <LucideIcon
          name={icon}
          color={getThemeColor('tagIcon')}
          size={getIconSize(size)}
        />
      )}
    </View>
  );
};

export default Tag;
