import React from 'react';
import BaseText from '../../base-text';
import HeadlineProps from './interface';
import { styles } from './style';

/**
 * This is the Display component in Figma, but we are using it as Headline in the app
 */
const Headline = ({
  size = 'md',
  weight = 'Regular',
  ...props
}: HeadlineProps) => {
  return (
    <BaseText
      style={[styles.headline, styles[size], styles[weight]]}
      {...props}
    />
  );
};

export default Headline;
