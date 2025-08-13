import React from 'react';
import { View } from 'react-native';
import { BaseToggle, BaseText } from '@/components/atoms';
import BrandToggleProps from './interface';
import { styles } from './styles';
import { useThemeStore } from '@/store/theme';

const BrandToggle = ({
  testId,
  title,
  description,
  titleProps,
  descriptionProps,
  ...toggleProps
}: BrandToggleProps) => {
  const { getThemeColor, getThemedStyles } = useThemeStore();

  // Get track color based on state
  const getTrackColor = () => ({
    false: getThemeColor(
      toggleProps.disabled
        ? 'toggleDisabledBackground'
        : 'toggleDefaultBackground',
    ),
    true: getThemeColor(
      toggleProps.disabled
        ? 'toggleDisabledBackground'
        : 'toggleSelectedBackground',
    ),
  });

  // Get thumb color based on state
  const getThumbColor = () =>
    getThemeColor(
      toggleProps.disabled
        ? 'toggleDisabledKnob'
        : toggleProps.value
          ? 'toggleSelectedKnob'
          : 'toggleDefaultKnob',
    );

  const themedStyles = getThemedStyles(styles);

  return (
    <View style={themedStyles.container}>
      <BaseToggle
        testId={testId}
        {...toggleProps}
        trackColor={getTrackColor()}
        thumbColor={getThumbColor()}
        ios_backgroundColor={getThemeColor('toggleDefaultBackground')}
      />
      <View style={themedStyles.contentContainer}>
        {title && (
          <BaseText
            text={title}
            textProps={titleProps}
            style={themedStyles.title}
          />
        )}
        {description && (
          <BaseText
            text={description}
            textProps={descriptionProps}
            style={themedStyles.description}
          />
        )}
      </View>
    </View>
  );
};

export default BrandToggle;
