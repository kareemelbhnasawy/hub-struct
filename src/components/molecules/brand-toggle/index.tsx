import React from 'react';
import { View } from 'react-native';
import BaseText from '../../atoms/base-text/base-text.component';
import BaseToggle from '../../atoms/base-toggle';
import BrandToggleProps from './interface';

function BrandToggle({
  testId,
  title,
  description,
  titleProps,
  descriptionProps,
  ...toggleProps
}: BrandToggleProps) {
  return (
    <View className="flex-row items-start py-4">
      <BaseToggle
        testId={testId}
        {...toggleProps}
        trackColor={{
          false: toggleProps.disabled
            ? 'toggle-disabled-background'
            : 'toggle-default-background',
          true: toggleProps.disabled
            ? 'toggle-disabled-background'
            : 'toggle-selected-background',
        }}
        thumbColor={
          toggleProps.disabled
            ? 'toggle-disabled-knob'
            : toggleProps.value
              ? 'toggle-selected-knob'
              : 'toggle-default-knob'
        }
        ios_backgroundColor="toggle-default-background"
      />
      <View className="flex-1 ms-4">
        <BaseText
          text={title}
          textProps={titleProps}
          className="text-toggle-title typo-size-text-md font-medium"
        />
        {description && (
          <BaseText
            text={description}
            textProps={descriptionProps}
            className="text-toggle-subtitle typo-size-text-sm mt-1"
          />
        )}
      </View>
    </View>
  );
}

export default BrandToggle;
