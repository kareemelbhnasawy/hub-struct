import React from 'react';
import { View } from 'react-native';
import { BaseToggle, BaseText } from '@/components/atoms';
import BrandToggleProps from './interface';
import { getThemeColor } from '@/theme/theme-colors';
import { styles } from './styles';

const BrandToggle = ({
  testId,
  title,
  description,
  titleProps,
  descriptionProps,
  ...toggleProps
}: BrandToggleProps) => {
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

  return (
    <View style={styles.container}>
      <BaseToggle
        testId={testId}
        {...toggleProps}
        trackColor={getTrackColor()}
        thumbColor={getThumbColor()}
        ios_backgroundColor={getThemeColor('toggleDefaultBackground')}
      />
      <View style={styles.contentContainer}>
        {title && (
          <BaseText text={title} textProps={titleProps} style={styles.title} />
        )}
        {description && (
          <BaseText
            text={description}
            textProps={descriptionProps}
            style={styles.description}
          />
        )}
      </View>
    </View>
  );
};

export default BrandToggle;
