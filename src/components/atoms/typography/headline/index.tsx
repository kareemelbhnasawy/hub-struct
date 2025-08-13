import React from 'react';
import BaseText from '../../base-text';
import HeadlineProps from './interface';
import { styles } from './style';
import { useThemeStore } from '@/store/theme';

/**
 * This is the Display component in Figma, but we are using it as Headline in the app
 */
const Headline = ({
  size = 'md',
  weight = 'Regular',
  ...props
}: HeadlineProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  return (
    <BaseText
      {...props}
      style={[
        themedStyles.headline,
        themedStyles[size],
        themedStyles[weight],
        props.style,
      ]} // add style here to allow for appending styles without breaking previous ones
    />
  );
};

export default Headline;
