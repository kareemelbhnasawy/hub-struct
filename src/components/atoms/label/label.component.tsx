import React from 'react';
import useStyles from '_styles/hooks/use-styles.hook';
import LabelProps from './label.props';
import rawStyles from './label.style';
import BaseText from '../base-text/base-text.component';
import TypographySizes from '../constants/typography-sizes.constant';
import FontStyle from '../constants/typography-font-style.constant';

function Label({
  testId,
  containerStyle: style,
  size = TypographySizes.M,
  fontStyle = FontStyle.Regular,
  stringProps,
  textStyle,
  isLoading,
  skeletonProps,
  ...textProps
}: LabelProps) {
  const styles = useStyles(rawStyles);
  
  return (
    <BaseText
      testId={`${testId}-label`}
      isLoading={isLoading}
      containerStyle={style}
      style={[styles.default, styles[size], styles[fontStyle], textStyle]}
      stringProps={stringProps}
      skeletonProps={skeletonProps}
      {...textProps}
    />
  );
}

export default Label;
