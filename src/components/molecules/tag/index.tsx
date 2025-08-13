import React from 'react';
import { View } from 'react-native';
import { LucideIcon, Paragraph } from '@/components/atoms';
import TagProps from './interface';
import { styles } from './styles';
import { getThemeColor } from '@/theme';
import { getIconSize } from './utils';

const Tag = ({
  testId,
  size,
  hasIcon,
  icon = 'X',
  labelProps,
  valueProps,
  onPress,
  containerStyle,
}: TagProps) => {
  return (
    <View
      testID={`${testId}-tag`}
      style={[styles.wrapper, styles[size], styles.hasGap, containerStyle]}>
      <Paragraph
        size="sm"
        testID={`${testId}-tag-label`}
        {...labelProps}
        style={[styles.text, labelProps.style]}
      />
      {valueProps && (
        <Paragraph
          testID={`${testId}-tag-value`}
          size="sm"
          {...valueProps}
          style={[styles.text, valueProps.style]}
        />
      )}
      {hasIcon && (
        <LucideIcon
        //TODO: wrap the icon add the onPress to the wrapper
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
