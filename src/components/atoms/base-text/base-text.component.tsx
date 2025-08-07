import React from 'react';
import { Text } from 'react-native';
import BaseTextProps from './base-text.props';
import { useTranslate } from '@/hooks';

const BaseText = ({
  text,
  isTranslated = true,
  textProps,
  children,
  ...props
}: BaseTextProps) => {
  const { translate } = useTranslate();

  return (
    <Text {...props}>
      {isTranslated ? translate(text, textProps) : text}
      {children}
    </Text>
  );
};

export default BaseText;
