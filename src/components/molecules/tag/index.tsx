import { View } from 'react-native';
import { BaseText, LucideIcon } from '@/components/atoms';
import { TagProps } from './interface';
import { styles } from './styles';
import { getThemeColor } from '@/theme';
import { getIconSize } from './utils';

const Tag = ({ testId, size, label, icon, value }: TagProps) => {
    const hasValueOrIcon = (value || icon);
  return (
    <View testID={`${testId}-tag`} style={[styles.wrapper, styles[size]]}>
      <BaseText
        testID={`${testId}-tag`}
        text={label}
        style={[
          hasValueOrIcon && styles.hasMarginRight,
          styles.text,
          styles[`${size}Text`],
        ]}
      />
      {value && (
        <BaseText
          testID={`${testId}-tag-value`}
          text={value}
          style={[
            icon && styles.hasMarginRight,
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
