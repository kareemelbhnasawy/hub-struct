import React from 'react';
import { Text } from 'react-native';
import BaseTextProps from './interface';
import { useTranslate } from '@/hooks';

const BaseText = ({
  testId,
  text,
  isTranslated = true,
  textProps,
  children,
  ...props
}: BaseTextProps) => {
  const { translate } = useTranslate();

  return (
    <Text testID={`${testId}-text`} {...props}>
      {isTranslated ? translate(text, textProps) : text}
      {children}
    </Text>
  );
};

export default BaseText;
