import React from 'react';
import {  Text } from 'react-native';
import BaseTextProps from './base-text.props';
import { useTranslate } from '../../../hooks/useTranslate';

function BaseText({
  isTranslated = true,
  textProps,
  children,
  ...props
}: BaseTextProps) {
 const {translate} = useTranslate()


  return <Text
        {...props}
      >
        {isTranslated && children ?translate(children?.toString(),textProps):children}
      </Text>
}

export default BaseText;
