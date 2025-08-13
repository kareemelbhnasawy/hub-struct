import React from 'react';
import BaseText from '../../base-text';
import ParagraphProps from './interface';
import { styles } from './style';

/**
 * This is the Text in Figma, but we are using it as Paragraph in the app
 */
const Paragraph = ({
  size = 'md',
  weight = 'Regular',
  ...props
}: ParagraphProps) => {
  return (
    <BaseText
      {...props}
      style={[styles.paragraph, styles[size], styles[weight], props.style]} // add style here to allow for appending styles without breaking previous ones
    />
  );
};

export default Paragraph;
