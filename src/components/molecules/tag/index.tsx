import { View } from 'react-native';
import { LucideIcon, Paragraph } from '@/components/atoms';
import TagProps from './interface';
import { styles } from './styles';
import { getThemeColor } from '@/theme';
import { getAbbreviatedSize, getIconSize } from './utils';

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
        size={getAbbreviatedSize(size)}
        style={[hasValueOrIcon && styles.hasMarginEnd, styles.text]}
      />
      {value && (
        <Paragraph
          testID={`${testId}-tag-value`}
          text={value}
          size={getAbbreviatedSize(size)}
          style={[icon && styles.hasMarginEnd, styles.text]}
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
