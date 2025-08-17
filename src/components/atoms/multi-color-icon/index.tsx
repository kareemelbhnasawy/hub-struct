import React from 'react';
import { SvgXml } from 'react-native-svg';
import MultiColorIconProps from './interface';
import { getMultiColorIconFnByName } from './utils';
import { scale } from 'react-native-size-matters';
import { COLORS } from '@/style';

const MultiColorIcon = ({
  testId,
  name,
  primaryColor,
  secondaryColor,
  stroke,
  size = 24,
  outline = false,
  ...props
}: MultiColorIconProps) => {
  const getXml = () => {
    const sourceFn = getMultiColorIconFnByName(name);
    if (outline) {
      return (
        sourceFn?.(COLORS.transparent, COLORS.transparent, primaryColor) || ''
      );
    }
    const strokeColor = stroke || COLORS.transparent;
    if (secondaryColor) {
      return sourceFn?.(primaryColor, secondaryColor, strokeColor) || '';
    }
    return sourceFn?.(primaryColor, primaryColor, strokeColor) || '';
  };

  const xml = getXml();
  return (
    <SvgXml testID={`${testId}-mulicolor-icon`} xml={xml} width={scale(size)} height={scale(size)} {...props} />
  );
};

export default MultiColorIcon;
