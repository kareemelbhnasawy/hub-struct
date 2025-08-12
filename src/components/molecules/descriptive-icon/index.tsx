import { View } from 'react-native';
import React from 'react';
import { LucideIcon, Paragraph } from '@/components/atoms';
import DescriptiveIconProps from './interface';
import styles from './styles';

const DescriptiveIcon = ({ iconProps, textProps }: DescriptiveIconProps) => {
  const wrapperAppliedStyles = [styles['wrapper']];

  //

  // This piece of code sets the private _isOutline to undefined in case of the consumer passing ANY of these props: (isCircle, isOutline, hasWrapper)
  // This happens to facilitate the change of variations between consumers

  let _isOutline: boolean | undefined = true;
  if (
    iconProps.isCircle !== undefined ||
    iconProps.isOutline !== undefined ||
    iconProps.hasWrapper !== undefined
  )
    _isOutline = undefined;

  // This piece of code sets the private _isOutline to undefined in case of the consumer passing ANY of these props: (isCircle, isOutline, hasWrapper)
  // This happens to facilitate the change of variations between consumers

  //

  return (
    <View style={wrapperAppliedStyles}>
      <LucideIcon isOutline={_isOutline} {...iconProps} />
      <View style={styles['text-wrapper']}>
        <Paragraph
          {...textProps}
          size="sm"
          weight="Medium"
          style={styles['icon-text']}
        />
      </View>
    </View>
  );
};

export default DescriptiveIcon;
